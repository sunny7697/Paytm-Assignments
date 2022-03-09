export const fetchData = async (search, searchType) => {
  try {
    // if (search == "") return [];

    let res = "",
      data = "";
    if (searchType === "0") {
      res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=2000"
      );
      data = await res.json();
      return data.results;
    } else if (searchType === "1") {
      res = await fetch(`https://pokeapi.co/api/v2/type/${searchType}`);
      data = await res.json();
      return data.pokemon;
    } else {
      res = await fetch(`https://pokeapi.co/api/v2/generation/${searchType}`);
      data = await res.json();
      return data.pokemon_species;
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};
