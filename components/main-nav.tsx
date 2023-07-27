"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
type MainnavProps = {
  data: Category[];
  className: string;
};

const Mainnav = ({ data, className }: MainnavProps) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/categories/${route.id}`,
    label: route.name,
    active: pathname === `/categories/${route.id}`,
  }));
  return (
    <>
      <ul className={cn("menu  menu-horizontal  flex   ", className)}>
        {routes.map((item) => (
          <Link
            className={cn(
              "",
              item.active
                ? "text-accent-focus"
                : "text-gray-500 hover:text-accent-focus"
            )}
            key={item.href}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Mainnav;
