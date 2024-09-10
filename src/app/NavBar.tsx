import Link from "next/link";
import React from "react";
import { FaSkull, FaLock } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";

export default function NavBar() {
  return (
    <nav className="flex space-x-6 h-14 border-b-2 items-center justify-left">
      <Link className="flex pl-2" href="/">
        <FaSkull />
        <FaLock />
        <MdGpsFixed />
      </Link>
      <ul className="flex space-x-6">
        <Link href="/">Home</Link>
        <Link href="/heroes">Heroes</Link>
        <Link href="/builds">Builds</Link>
      </ul>
    </nav>
  );
}
