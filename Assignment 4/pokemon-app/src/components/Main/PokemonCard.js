import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchImage } from "../../functions/api";

const PokemonCard = ({ pokemon }) => {
  const [imageUrl, setImageUrl] = useState({});
  const searchType = useSelector((state) => state.searchType);
  //   if (searchType === "2") pokemon = pokemon.pokemon;

  useEffect(async () => {
    const {
      sprites: {
        other: {
          dream_world: { front_default: image },
        },
      },
    } = await fetchImage(pokemon.name);
    setImageUrl(image);
  }, []);

  if (!imageUrl) return <></>;

  return (
    <div className="card-container">
      <div className="pokemon-card">
        <div className="card-image">
          <img src={imageUrl} alt="pokemon_image" />
        </div>
        <div className="card-title">
          <h3>{pokemon.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
