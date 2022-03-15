import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchImage } from "../../functions/api";
import { selectedPokemon } from "../../redux/actions.js/pokemonActions";

const PokemonCard = ({ pokemon, searchType }) => {
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useDispatch();

  if (searchType === "1") {
    pokemon = pokemon.pokemon;
  }

  const handleClick = () => {
    dispatch(selectedPokemon({ name: pokemon.name, image: imageUrl }));
  };

  useEffect(() => {
    const getImage = async () => {
      if (searchType == "2") {
        const data = await (
          await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`
          )
        ).json();
        pokemon = data.varieties[0].pokemon;
      }
      const res = await fetchImage(pokemon.name);
      const image =
        res.sprites?.other?.dream_world?.front_default ||
        res.sprites?.other?.home?.front_default;

      setImageUrl(image);
    };

    getImage();
  }, [pokemon, imageUrl]);

  if (!imageUrl) return <></>;

  return (
    <div className="card-container">
      <div className="pokemon-card" onClick={handleClick}>
        <Link to={`/pokemon/${pokemon.name}`}>
          <div className="card-image">
            <img src={imageUrl} alt="pokemon_image" />
          </div>
          <div className="card-title">
            <h3>{pokemon.name}</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PokemonCard;
