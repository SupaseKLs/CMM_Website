"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

interface StickyCardProps {
  sections: {
    title: string;
    image: string;
    imageAlt: string;
    content: string[];
  }[];
  className?: string;
}

export function StickyCard({ sections, className }: StickyCardProps) {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll("[data-section]");
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sectionElements.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        
        if (scrollPosition >= absoluteTop) {
          setActiveSection(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-6", className)}>
      <div className="relative">
        <div className="sticky top-6">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src={sections[activeSection].image}
              alt={sections[activeSection].imageAlt}
              fill
              className="object-cover transition-opacity duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
      <div className="space-y-16">
        {sections.map((section, index) => (
          <section key={index} data-section className="space-y-4">
            <h2 className="text-2xl font-bold">{section.title}</h2>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}