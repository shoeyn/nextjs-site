import { Bento } from "./bento";
import Image from "next/image";
import profilePic from "@/images/self.jpg";
import { MailIcon } from "./icons/mail";
import { LinkedinIcon } from "./icons/linkedin";
import { GtihubIcon } from "./icons/github";

export function PersonalInfo() {
  return (
    <Bento className="personal-info">
      <Image
        className="rounded-2xl border shadow"
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
          n.shoemark@gmail.com
        </div>
        <div className="flex items-center gap-2">
          <a href="https://www.linkedin.com/in/nathanshoemark/">
            <LinkedinIcon />
          </a>
          <a href="https://github.com/shoeyn">
            <GtihubIcon />
          </a>
        </div>
      </div>
    </Bento>
  );
}
