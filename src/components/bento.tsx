"use client"
import { useState } from "react";

const getColour = (randomizer = Math.random) => {
  const classes = [
    "hover:border-theme1!",
    "hover:border-theme2!",
    "hover:border-theme3!",
    "hover:border-theme4!",
  ];
  return classes[Math.floor(randomizer() * classes.length)];
}

export function Bento({
  className,
  children,
  randomizer = Math.random,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
  randomizer?: () => number;
}>) {
  const [colour] = useState(getColour(randomizer))

  let outClass = "";
  if (className) {
    outClass = className + " ";
  }
  outClass += "glass rounded-xl border-2 p-4 shadow-lg " + colour + " lg:p-8";

  return (
    <div className={outClass} suppressHydrationWarning={true}>
      {children}
    </div>
  );
}
