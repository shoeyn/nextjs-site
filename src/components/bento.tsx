import { Glow } from "@codaworks/react-glow";

export function Bento({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  const colours = ["#9200ff", "#6e1eff", "#0972ff", "#4b00ff"];
  const colour = colours[Math.floor(Math.random() * colours.length)];

  return (
    <Glow color={colour}>
      <div
        className={
          className +
          " glass rounded-xl border-2 p-4 shadow-lg glow:border-glow glow:bg-glow/20 lg:p-8"
        }
      >
        {children}
      </div>
    </Glow>
  );
}
