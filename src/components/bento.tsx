export function Bento({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  const colours = ["hover:border-theme1!", "hover:border-theme2!", "hover:border-theme3!", "hover:border-theme4!"];
  const colour = colours[Math.floor(Math.random() * colours.length)];
  let outClass = ""
  if (className) {
    outClass = className + ' '
  }
  outClass += "glass rounded-xl border-2 p-4 shadow-lg "+colour+" lg:p-8"

  return (
    <div
      className={outClass}
    >
      {children}
    </div>
  );
}
