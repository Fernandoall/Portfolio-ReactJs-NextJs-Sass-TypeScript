import { Experience } from "@/components/experience/experience";
import { Header } from "../components/header/header";
import "../styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experience />
      <div className="infos">
        <h3 className="sectionTitle">Languages</h3>
        <div className="languages-info">
          <span></span>
          <span>EN Intermediário</span>
          <span> 🇧🇷 PT-BR - Native Speaker</span>
        </div>
        <h3 className="sectionTitle">Education</h3>
        <div className="education-info">
          <span>🎓</span>
          <span>ADS - Institudo Federal de Cubatão</span>
        </div>
        <span></span>
      </div>
      <div className="buttons">
        <div className="social"></div>
        <button>contact-me</button>
      </div>
    </main>
  );
}
