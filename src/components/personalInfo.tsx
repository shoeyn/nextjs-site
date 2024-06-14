import { Bento } from "./bento";
import Image from "next/image";
import profilePic from "@/images/self.jpg";
import { PhoneIcon } from "./icons/phone";
import { MailIcon } from "./icons/mail";

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
      <div className="flex justify-between">
        <div className="flex items-center">
          <PhoneIcon />
          07484 773330
        </div>
        <div className="flex items-center">
          <MailIcon />
          n.shoemark@gmail.com
        </div>
      </div>
    </Bento>
  );
}
