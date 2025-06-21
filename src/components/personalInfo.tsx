import { Bento } from "./bento";
import Image from "next/image";
import profilePic from "@/images/self.webp";
import { MailIcon } from "./icons/mail";
import { LinkedinIcon } from "./icons/linkedin";
import { GtihubIcon } from "./icons/github";

export function PersonalInfo() {
  return (
    <Bento className="personal-info">
      <Image
        className="rounded-2xl border shadow-sm"
        src={profilePic}
        alt="Nathan Shoemark"
        priority
      />
      <div className="my-4">
        <h2>Nathan Shoemark</h2>
        <h3>Full-Stack Web Developer</h3>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="flex items-center">
          <MailIcon />
          <span className="ml-2">n.shoemark@gmail.com</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/nathanshoemark/"
            title="Linkedin Profile"
          >
            <LinkedinIcon />
          </a>
          <a href="https://github.com/shoeyn" title="Github Profile">
            <GtihubIcon />
          </a>
        </div>
      </div>
    </Bento>
  );
}
