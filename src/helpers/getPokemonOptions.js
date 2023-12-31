import pokemonApi from "@/api/pokemonApi";

const getPokemons = () => {
  const pokemonArray = Array.from(Array(650));
  return pokemonArray.map((_, index) => index + 1);
};

const getPokemonNames = async ([a, b, c, d]) => {
  const promiseArr = [
    pokemonApi.get(`/${a}`),
    pokemonApi.get(`/${b}`),
    pokemonApi.get(`/${c}`),
    pokemonApi.get(`/${d}`),
  ];
  const [p1, p2, p3, p4] = await Promise.all(promiseArr);
  return [
    { id: p1.data.id, name: p1.data.name },
    { id: p2.data.id, name: p2.data.name },
    { id: p3.data.id, name: p3.data.name },
    { id: p4.data.id, name: p4.data.name },
  ];
};

const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  return getPokemonNames(mixedPokemons.slice(0, 4));
};

export default getPokemonOptions;
