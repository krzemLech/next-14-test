import Image from "next/image";

export default function Home() {
  return (
    <div className="app">
      <h1>HomeNow</h1>
      <div>
        <Image src="/mic.webp" alt="mic" height={160} width={600} />
      </div>
      <p className="mt-8 ena-text--small">Checkin title</p>
    </div>
  )
}
