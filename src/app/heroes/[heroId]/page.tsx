import React from "react";

export const revalidate = 60;

async function getHero(id: any) {
  const res = await fetch(`http://localhost:3000/api/heroes/${id}`, {
    method: "GET",
  });
  const data = await res.json();

  return data;
}

async function getWeapon(id: any) {
  const res = await fetch(`http:localhost:3000/api/weapons/${id}`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
}

async function getVitality(id: any) {
  const res = await fetch(`http:localhost:3000/api/vitality/${id}`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
}

export default async function page({ params }: any) {
  const { heroId } = params;
  const hero = await getHero(heroId);
  const weapon = await getWeapon(heroId);
  const vitality = await getVitality(heroId);
  return (
    <section className="flex flex-col justify-center items-center p-2 h-full">
      <div className="relative w-2/6 border-2 flex flex-col flex-wrap justify-center items-center gap-y-2">
        <img
          alt={`An image of ${hero.name}`}
          src={`/Deadlock_gameasset_Hero_${hero.name}.png`}
        />

        <Hero hero={hero} />
        <Weapon weapon={weapon} />
        <Vitality vitality={vitality} />
      </div>
    </section>
  );
}

function Hero({ hero }: any) {
  const { name, description, blurb } = hero;
  return (
    <table>
      <tbody>
        <tr className="odd:bg-zinc-100">
          <th className="p-2">Name:</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th className="p-2">Description:</th>
          <td>{description}</td>
        </tr>
        <tr className="odd:bg-zinc-100">
          <th className="p-2">Blurb:</th>
          <td className="p-2">{blurb}</td>
        </tr>
      </tbody>
    </table>
  );
}

function Weapon({ weapon }: any) {
  const { dps, bulletdamage, ammo, bulletpersec, lightmelee, heavymelee } =
    weapon;
  return (
    <>
      <h1>Weapon Stats</h1>
      <div className="grid grid-cols-2 w-full">
        <table>
          <tbody>
            <tr className="odd:bg-zinc-100">
              <th className="p-2">DPS:</th>
              <td>{dps}</td>
            </tr>
            <tr>
              <th className="p-2">Ammo:</th>
              <td>{ammo}</td>
            </tr>
            <tr className="odd:bg-zinc-100">
              <th className="p-2">Light Melee:</th>
              <td>{lightmelee}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr className="odd:bg-zinc-100">
              <th className="p-2">Bullet Damage:</th>
              <td>{bulletdamage}</td>
            </tr>
            <tr>
              <th className="p-2">Bullets Per Second:</th>
              <td>{bulletpersec}</td>
            </tr>
            <tr className="odd:bg-zinc-100">
              <th className="p-2">Heavy Melee:</th>
              <td>{heavymelee}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

function Vitality({ vitality }: any) {
  const {
    health,
    healthregen,
    bulletresist,
    spiritresist,
    movespeed,
    sprintspeed,
    stamina,
  } = vitality;
  return (
    <>
      <h1>Vitality</h1>
      <div className="grid grid-cols-2 w-full">
        <table>
          <tbody>
            <tr className="odd:bg-zinc-100">
              <th className="p-2">Max Health:</th>
              <td>{500}</td>
            </tr>
            <tr>
              <th className="p-2">Bullet Resist:</th>
              <td>{bulletresist}%</td>
            </tr>
            <tr className="odd:bg-zinc-100">
              <th className="p-2">Move Speed:</th>
              <td>{movespeed}m/s</td>
            </tr>
            <tr>
              <th className="p-2">Stamina:</th>
              <td>{stamina}</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr className="odd:bg-zinc-100">
              <th className="p-2">Health Regen:</th>
              <td>{healthregen}</td>
            </tr>
            <tr>
              <th className="p-2">Spirit Resist:</th>
              <td>{spiritresist}%</td>
            </tr>
            <tr className="odd:bg-zinc-100">
              <th className="p-2">Sprint Speed:</th>
              <td>{sprintspeed}m/s</td>
            </tr>
            <tr>
              <th className="h-full"></th>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
