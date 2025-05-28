"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Links = {
  name: string;
  href: string;
};

const links: Links[] = [
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export function NavbarLinks() {
  const pathname = usePathname();

  return (
    <div className="flex items-center space-x-4">
      {links.map((link: Links) => (
        <Link
          key={link.name}
          href={link.href}
          className={cn(
            "text-sm text-muted-foreground font-medium tracking-tighter hover:text-primary hover:font-semibold transition-all duration-100",
            {
              "text-primary font-semibold": pathname === link.href,
            }
          )}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
