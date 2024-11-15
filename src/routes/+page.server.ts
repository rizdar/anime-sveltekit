import type { AnimeProp } from "$lib";

export async function load() {
  const request = await fetch(
    "https://shikimori.one/api/animes?page=1&limit=8&order=popularity"
  );
  let animes;
  try {
    let response = await request.json();
    animes = response;
  } catch (error) {
    console.log(error);
  }

  return {
    animes,
  } as { animes: AnimeProp[] };
}
