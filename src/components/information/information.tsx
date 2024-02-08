import { SectionTitle } from "../sectionTitle/sectionTitle";
import "./information.scss";

export function Info() {
  return (
    <div className="infos">
      <SectionTitle text="Languages" />
      <div className="languages-info">
        <span>🇺🇸 EN - Intermediary</span>
        <span>🇧🇷 PT-BR - Native Speaker</span>
      </div>
      <SectionTitle text="Education" />
      <div className="educational-info">
        <span>🎓</span>
        <span>
          Graduating in Technology and Analysis in Systems Development - IFSP
        </span>
      </div>
    </div>
  );
}
