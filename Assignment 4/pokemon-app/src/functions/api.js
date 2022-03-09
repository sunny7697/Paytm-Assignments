export const fetchData = async (search, searchType) => {
  try {
    // if (search == "") return [];

    let res = "",
      data = "";
    if (searchType === "0") {
      res = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=800");
      data = await res.json();
      return filterData(data.results, search);
      // return data.results;
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

export const filterData = (data, search) => {
  return data.filter((d) => {
    return d.name.indexOf(search.toLowerCase()) === 0;
  });
};
