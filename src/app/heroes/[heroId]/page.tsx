import React from "react";

async function getHero(id: any) {
  const res = await fetch(`http://localhost:3000/api/heroes/${id}`, {
    method: "GET",
  });
  const data = await res.json();

  return data;
}

export default async function page({ params }: any) {
  const { heroId } = params;
  const { name, description, blurb } = await getHero(heroId);
  return (
    <section>
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{blurb}</p>
    </section>
  );
}
