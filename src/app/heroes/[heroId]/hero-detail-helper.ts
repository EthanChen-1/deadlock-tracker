export async function getHero(id: any) {
  const res = await fetch(`http://localhost:3000/api/heroes/${id}`, {
    method: "GET",
  });
  const data = await res.json();

  return data;
}

export async function getWeapon(id: any) {
  const res = await fetch(`http:localhost:3000/api/weapons/${id}`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
}

export async function getVitality(id: any) {
  const res = await fetch(`http:localhost:3000/api/vitality/${id}`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
}

export async function getAbilities(id: any) {
  const res = await fetch(`http:localhost:3000/api/ability/${id}`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
}

export async function getPowerIncrease(id: any) {
  const res = await fetch(`http:localhost:3000/api/powerincrease/${id}`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
}
