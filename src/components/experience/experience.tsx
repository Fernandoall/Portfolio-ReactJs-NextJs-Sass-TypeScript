import { SectionTitle } from "../sectionTitle/sectionTitle";
import "./experiencie.scss";

export function Experience() {
  return (
    <div className="experiencie">
      <SectionTitle text="Experiencie" />
      <p>
        3 years working as a Software Developer, in companys such as Itaú, Stone
        and Aftersale.
      </p>
      <div className="experiencie-time"></div>
    </div>
  );
}
