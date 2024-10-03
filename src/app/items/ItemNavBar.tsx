"use client";

import React from "react";
import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";
import { FiTarget } from "react-icons/fi";
import { FaShieldAlt } from "react-icons/fa";
import { MdOutlineStarRate } from "react-icons/md";

export default function ItemNavBar() {
  const pathName = usePathname();
  console.log(pathName);
  const links = [
    { label: "Weapon", href: "/weapon", icon: <FiTarget size={45} /> },
    { label: "Vitality", href: "/vitality", icon: <FaShieldAlt size={45} /> },
    { label: "Spirit", href: "/spirit", icon: <MdOutlineStarRate size={45} /> },
  ];
  return (
    <nav className="flex gap-3">
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            className={classNames(
              "flex text-xl gap-1 justify-center items-center rounded-t px-6 py-2 border-t-8",
              {
                "bg-stone-200": !pathName.includes(link.href),
                "bg-orange-300": pathName.includes("weapon"),
                "bg-lime-500": pathName.includes("vitality"),
                "bg-purple-300": pathName.includes("spirit"),
                "border-orange-300": link.label === "Weapon",
                "border-lime-500": link.label === "Vitality",
                "border-purple-300": link.label === "Spirit",
              }
            )}
            href={`/items${link.href}`}
          >
            {link.icon}
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
