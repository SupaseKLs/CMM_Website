export default function Scheme() {
    return(
        <video
        playsInline
        autoPlay
        muted
        loop
        preload="metadata"
        className="w-full h-screen object-cover"
      >
        <source src="/video/Room.mp4" type="video/mp4" />
      </video>
    )
}