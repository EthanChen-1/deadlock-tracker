import React from "react";
import SoulScaling from "./SoulScaling";
import {
  getHero,
  getWeapon,
  getVitality,
  getAbilities,
  getPowerIncrease,
} from "./hero-detail-helper";

export const revalidate = 3600;

export default async function HeroDetailPage({ params }: any) {
  const { heroId } = params;
  const hero = await getHero(heroId);
  const weapon = await getWeapon(heroId);
  const vitality = await getVitality(heroId);
  const abilities = await getAbilities(heroId);
  const powerincrease = await getPowerIncrease(heroId);
  return (
    <section className="flex flex-col xl:grid xl:grid-cols-12 xl:grid-rows-1 gap-2 p-2">
      <div className="col-span-6">
        <Abilities abilities={abilities} />
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <PowerIncrease powerincrease={powerincrease} />
        <SoulScaling />
      </div>
      <div className="xl:col-span-5 border-2 flex flex-row flex-wrap justify-center items-center h-[calc(100vh-4.5rem)]">
        <img
          alt={`An image of ${hero.name}`}
          src={`/Deadlock_gameasset_Hero_${hero.name}.png`}
        />
        <Bio hero={hero} />
        <Weapon weapon={weapon} />
        <Vitality vitality={vitality} />
      </div>
    </section>
  );
}

function Bio({ hero }: any) {
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
              <td>{health}</td>
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

function PowerIncrease({ powerincrease }: any) {
  const { modifiers } = powerincrease;
  return (
    <div className="text-center">
      <h1 className="bg-zinc-400">Power Increase</h1>
      <table className="w-full">
        <tbody>
          {modifiers.map((modifier: any) => {
            return (
              <tr key={modifier} className="odd:bg-zinc-100">
                <td>{modifier}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function Abilities({ abilities }: any) {
  const abilityPointCost = [1, 2, 5];
  return (
    <section className="grid grid-cols-1 grid-rows-4 gap-2 h-full">
      {abilities.map((ability: any, index: number) => {
        return (
          <div key={ability.name + " " + index} className="bg-zinc-100 p-2 ">
            <h2 className="text-2xl font-bold">{ability.name}</h2>
            <p>{ability.description}</p>
            <div className="xl:grid xl:grid-cols-3 xl:grid-rows-1 gap-2">
              {ability.upgrades.map((upgrade: any, index: number) => (
                <div key={upgrade} className=" bg-zinc-200 flex flex-col ">
                  <div className="bg-zinc-400 p-1">
                    {abilityPointCost[index]} Ability Point(s)
                  </div>
                  <div className="p-2">{upgrade}</div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
