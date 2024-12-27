import Image from "next/image"
import Logo from "@/assets/images/logo.png"
import Link from "next/link"
export default function Navbar() {
    return (
        <nav>
            <div className="flex justify-between w-full">
            <div>
                <Image src={Logo} width={200} height={75} alt="Logo Multimedia" />
            </div>

            <div className="flex items-center">
                <ul className="flex">
                    <li><Link href="">หน้าหลัก</Link></li>
                    <li><Link href="">บุคลากร</Link></li>
                    <li><Link href="">หลักสูตร</Link></li>
                    <li><Link href="">บริการ</Link></li>
                    <li><Link href="">ข่าวสาร</Link></li>
                    <li><Link href="">ติดต่อเรา</Link></li>
                </ul>
                <div>
                    <div className="group block relative cursor-pointer text-xl p-2 w-32 border bg-white rounded-full overflow-hidden text-black text-center font-semibold">
                        <Link
                            target='_blank'
                            href="/Resume.pdf"  // Replace with the correct path to your PDF file
                            className="w-full h-full block"
                        >
                            <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
                                Resume
                            </span>
                            <div className="flex gap-2 text-white bg-blue-400 z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none">
                                <span>Resume</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </nav>
    )
}