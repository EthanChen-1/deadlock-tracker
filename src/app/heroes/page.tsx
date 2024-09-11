import Link from "next/link";
import React from "react";

export default function HeroesPage() {
  const heroList = [
    { name: "Abrams", description: "Utility Drain Tank" },
    { name: "Bebop", description: "Utility Initiator Carry" },
    { name: "Dynamo", description: "Crowd Control Support" },
    { name: "Grey Talon", description: "Poke Carry" },
    { name: "Haze", description: "Stealth Burst Assassin" },
    { name: "Infernus", description: "AoE Initator" },
    { name: "Ivy", description: "Utility Mobility Support" },
    { name: "Kelvin", description: "Stall Healer Support" },
    { name: "Lady Geist", description: "Drain Duelist" },
    { name: "Lash", description: "Mobility Disruption Carry" },
    { name: "Mc Ginnis", description: "Anchor Stall Pusher" },
    { name: "Mo & Krill", description: "Disruption Tank" },
    { name: "Paradox", description: "Utility Disruption Initiator" },
    { name: "Pocket", description: "AoE Mobility Carry" },
    { name: "Seven", description: "AoE Carry" },
    { name: "Shiv", description: "DoT Burst Assassin" },
    { name: "Vindicta", description: "Sniper Assassin" },
    { name: "Viscous", description: "Stall Disruption Tank" },
    { name: "Warden", description: "Debuff Tank" },
    { name: "Wraith", description: "Mobility Disruption Duelist" },
    { name: "Yamato", description: "Mobility Burst Assassin" },
  ];
  return (
    <section className="grid grid-cols-12 grid-rows-12 p-2 gap-2 h-screen">
      {heroList.map((hero) => {
        return <Hero key={hero.name} hero={hero} />;
      })}
    </section>
  );
}

function Hero({ hero }: any) {
  return (
    <Link
      href={`/heroes/${hero.name}`}
      className="col-span-6  xl:col-span-3 row-span-1  xl:row-span-2 flex flex-col justify-center items-center bg-zinc-100 hover:bg-zinc-200"
    >
      <p>{hero.name}</p>
      <p>{hero.description}</p>
    </Link>
  );
}
