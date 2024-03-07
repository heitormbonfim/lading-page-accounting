export default function TitleSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <h2 className={`text-center text-3xl font-extralight py-16 ${className}`}>{children}</h2>;
}
