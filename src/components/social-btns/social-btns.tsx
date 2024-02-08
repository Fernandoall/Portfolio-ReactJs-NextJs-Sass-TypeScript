import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedIn-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss";

export function SocialBtns() {
  return (
    <div className="social">
      <a target="_blank" href="https://www.instagram.com/fernandogomiss/">
        <InstaIcon />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/fernando--gomes/">
        <LinkedInIcon />
      </a>
      <a target="_blank" href="https://github.com/Fernandoall">
        <GitHubIcon />
      </a>
      <a href="">
        <TwitterIcon />
      </a>
    </div>
  );
}
