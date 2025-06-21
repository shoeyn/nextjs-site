export function Bento({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  const colours = ["#9200ff", "#6e1eff", "#0972ff", "#4b00ff"];
  const colour = colours[Math.floor(Math.random() * colours.length)];
  let outClass = ""
  if (className) {
    outClass = className + ' '
  }
  outClass += "glass rounded-xl border-2 p-4 shadow-lg border-["+colour+"] lg:p-8"

  return (
    <div
      className={outClass}
    >
      {children}
    </div>
  );
}
