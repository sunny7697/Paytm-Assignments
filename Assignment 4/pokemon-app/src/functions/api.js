export const fetchData = async (search, searchType) => {
  try {
    let res = "",
      data = "";
    if (searchType === "0") {
      res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=800");
      data = await res.json();
      return filterData(data.results, search);
    } else if (searchType === "1") {
      res = await fetch(`https://pokeapi.co/api/v2/type/${search}`);
      data = await res.json();
      return data.pokemon;
    } else {
      res = await fetch(`https://pokeapi.co/api/v2/generation/${search}`);
      data = await res.json();
      return data.pokemon_species;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchImage = async (name) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchPokemonDetails = async (name) => {
  let details = {};
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(async (res) => {
      const data = await res.json();
      details = {
        name: data.name,
        height: data.height,
        weight: data.weight,
        moves: data.moves.slice(0, 5).map((m) => m.move.name),
        types: data.types.map((t) => t.type.name),
      };

      return data.species;
    })
    .then(async (species) => {
      const res = await fetch(species.url);
      return res;
    })
    .then(async (res) => {
      const data = await res.json();
      details.generation = data.generation.name;

      return data.evolution_chain.url;
    })
    .then(async (url) => {
      const res = await fetch(url);
      return res;
    })
    .then(async (res) => {
      const data = await res.json();

      details.evolution_chain = data.chain.evolves_to.map((item) => {
        return [
          data.chain.species.name,
          item.species.name,
          item.evolves_to[0]?.species.name,
        ];
      });

      if (details.evolution_chain.length === 0)
        details.evolution_chain = [[data.chain.species.name]];
    });

  return details;
};

export const filterData = (data, search) => {
  return data.filter((d) => {
    return d.name.indexOf(search.toLowerCase()) === 0;
  });
};
