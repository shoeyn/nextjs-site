export function Bento({
  className,
  children,
}: Readonly<{
  className?: string;
  children: React.ReactNode;
}>) {
  return (
    <div className={className + ' glass rounded-xl border-2 p-8 shadow-lg'}>{children}</div>
  );
}
