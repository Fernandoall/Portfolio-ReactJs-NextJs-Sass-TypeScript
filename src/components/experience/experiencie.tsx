import { SectionTitle } from "../sectionTitle/sectionTitle";

import "./experiencie.scss";
import { Skill } from "../skill/skill";

export function Experience() {
  return (
    <div className="experience">
      <SectionTitle text="Experience" />
      <p>
        2 years studying systems development and creating free web applications.
      </p>
      <div className="experience-time">
        <Skill image="/react.png" measure={2} years="1 years" />
        <Skill image="/ts.png" measure={3} years="1 years" />
        <Skill image="/js.png" measure={3} years="2 years" />
        <Skill image="/python.png" measure={1} years="1 year" />
      </div>
    </div>
  );
}
