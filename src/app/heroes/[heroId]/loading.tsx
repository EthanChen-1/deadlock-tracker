import React from "react";
import { FaSkull, FaLock } from "react-icons/fa";
import { MdGpsFixed } from "react-icons/md";

export default function loading() {
  return (
    <div className="h-screen animate-ping flex flex-row flex-wrap justify-center items-center ">
      <FaSkull size={60} />
      <FaLock size={60} />
      <MdGpsFixed size={60} />
    </div>
  );
}
