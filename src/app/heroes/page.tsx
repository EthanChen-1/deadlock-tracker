import classNames from "classnames";
import Link from "next/link";
import React from "react";

export const revalidate = 3600;

async function getAllHeroes() {
  const res = await fetch("http://localhost:3000/api/heroes", {
    method: "GET",
  });
  const data = await res.json();
  return data as any[];
}

export default async function HeroesPage() {
  const heroList = await getAllHeroes();
  return (
    <section className="grid grid-cols-12 grid-rows-24 p-2 gap-2 h-[calc(100vh-3.5rem)]">
      {heroList.map((hero: any) => {
        return <Hero key={hero.name} hero={hero} />;
      })}
    </section>
  );
}

function Hero({ hero }: any) {
  const { id, name, description } = hero;
  return (
    <Link
      href={`/heroes/${id}`}
      className={classNames(
        "relative",
        "bg-zinc-100",
        "col-span-6  2xl:col-span-4",
        "row-span-1 2xl:row-span-2",
        "flex flex-col justify-center items-left",
        "pl-4",
        "hover:shadow-gray-700 hover:shadow-inner",
        "transition-colors",
        "transition-[width]",
        {
          "hover:bg-blue-200": name === "Abrams",
          "hover:bg-orange-300": name === "Bebop",
          "hover:bg-slate-300": name === "Dynamo",
          "hover:bg-amber-100": name === "Grey Talon",
          "hover:bg-orange-200": name === "Haze",
          "hover:bg-red-300": name === "Infernus",
          "hover:bg-purple-100": name === "Ivy",
          "hover:bg-teal-100": name === "Kelvin",
          "hover:bg-emerald-200": name === "Lady Geist",
          "hover:bg-blue-300": name === "Lash",
          "hover:bg-stone-300": name === "McGinnis",
          "hover:bg-stone-400": name === "Mo & Krill",
          "hover:bg-purple-300": name === "Paradox",
          "hover:bg-neutral-300": name === "Pocket",
          "hover:bg-yellow-100": name === "Seven",
          "hover:bg-red-100": name === "Shiv",
          "hover:bg-sky-100": name === "Vindicta",
          "hover:bg-green-300": name === "Viscous",
          "hover:bg-indigo-200": name === "Warden",
          "hover:bg-violet-300": name === "Wraith",
          "hover:bg-indigo-400": name === "Yamato",
        }
      )}
    >
      <p className="text-2xl font-bold">{name}</p>
      <p>{description}</p>
      <img
        className={classNames("absolute", "right-0 bottom-0", "h-5/6")}
        src={`/Deadlock_gameasset_Hero_${name}.png`}
        alt={`An image of ${name}`}
      />
    </Link>
  );
}
