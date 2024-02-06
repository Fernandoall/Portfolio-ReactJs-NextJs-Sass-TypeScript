import Image from "next/image";
import "./header.scss";

export function Header() {
  return (
    <div className="header">
      <div>
        <h1>Hi, i am Fernando!👋</h1>
        <h2>Software Engineer</h2>
      </div>
      <Image
        src="/profile-pic.png"
        alt="vercel logo"
        width={300}
        height={290}
        priority
      />
    </div>
  );
}
