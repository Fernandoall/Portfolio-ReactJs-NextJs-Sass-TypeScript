import { Header } from "../components/header/header";
import "../styles/home.scss";

export default function Home() {
  return (
    <main className="container">
      <Header />
      <div className="experiencie">
        <h3>Experiencie </h3>
        <p>
          3 years working as a Software Developer, in companys such as Itaú,
          Stone and Aftersale.
        </p>
        <div className="experiencie-time"></div>
        <div className="infos">
          <h3>Languages</h3>
          <div className="languages-info">
            <span> 🇺🇸 EN Intermediário</span>
            <span> 🇧🇷 PT-BR - Native Speaker</span>
          </div>
          <h3>Education</h3>
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
      </div>
    </main>
  );
}
