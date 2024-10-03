import { redirect } from "next/navigation";
import React from "react";

export default function ItemPage() {
  return redirect("/items/weapon");
}
