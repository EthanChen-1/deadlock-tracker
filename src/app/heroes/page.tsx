import Link from "next/link";
import React, { cache } from "react";

async function getAllHeroes() {
  const res = await fetch("http://localhost:3000/api/heroes", {
    cache: "no-cache",
  });
  const data = await res.json();
  return data as any[];
}

export default async function HeroesPage() {
  const heroList = await getAllHeroes();
  return (
    <section className="grid grid-cols-12 grid-rows-12 p-2 gap-2 h-screen">
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
      className="col-span-6  xl:col-span-3 row-span-1  xl:row-span-2 flex flex-col justify-center items-center bg-zinc-100 hover:bg-zinc-200"
    >
      <p>{name}</p>
      <p>{description}</p>
    </Link>
  );
}
