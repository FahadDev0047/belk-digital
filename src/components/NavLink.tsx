"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface NavLinkProps {
  href: string;
  className?: string;
  activeClassName?: string;
  children: ReactNode;
  [key: string]: any;
}

export const NavLink = ({
  href,
  className,
  activeClassName,
  children,
  ...props
}: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={cn(className, isActive && activeClassName)}
      {...props}
    >
      {children}
    </Link>
  );
};

