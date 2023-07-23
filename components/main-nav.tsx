"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
type MainnavProps = {
  data: Category[];
};
const Mainnav = ({ data }: MainnavProps) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <>
      <ul className="menu menu-horizontal px-1">
        {routes.map((item) => (
          <Link
            className={cn(
              "",
              item.active ? "text-neutral-focus" : "text-gray-500"
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

{
  /* <li>
            <Link href="">Item 1</Link>
          </li>
          <li>
            <Link href="">Item 3</Link>
          </li>*/
}
