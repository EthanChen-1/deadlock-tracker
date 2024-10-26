import React from "react";
import ItemNavBar from "./ItemNavBar";

export default function ItemLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[calc(100vh-3.5em)] w-full">
      <ItemNavBar />
      {children}
    </div>
  );
}
