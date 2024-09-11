"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaSkull, FaLock } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";
import classNames from "classnames";

export default function NavBar() {
  const pathName = usePathname();
  const links = [
    { label: "Home", href: "/" },
    { label: "Heroes", href: "/heroes" },
    { label: "Builds", href: "/builds" },
  ];
  return (
    <nav className="flex space-x-6 h-14 border-b-2 items-center justify-left">
      <Link className="flex pl-2" href="/">
        <FaSkull />
        <FaLock />
        <MdGpsFixed />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => {
          return (
            <Link
              href={link.href}
              key={link.href}
              className={classNames({
                "text-zinc-950": pathName === link.href,
                "text-zinc-500": pathName !== link.href,
                "hover:text-zinc-800 transition-colors": true,
                "font-bold": true,
              })}
            >
              {link.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
