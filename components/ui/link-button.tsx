import Link from "next/link";
import { Button } from "./button";

export default function LinkButton({
  title,
  href,
  _blank,
  className,
}: {
  title: string;
  href: string;
  _blank?: boolean;
  className?: string;
}) {
  return (
    <Button variant="link" className={`text-white text-lg font-extralight ${className}`} asChild>
      {_blank ? (
        <Link href={href} target="_blank">
          {title}
        </Link>
      ) : (
        <Link href={href}>{title}</Link>
      )}
    </Button>
  );
}
