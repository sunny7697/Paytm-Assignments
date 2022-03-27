import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { fetchImage } from "../../functions/api";
import {
  getPokemonDetails,
  removePokemonDetails,
  removePokemons,
  selectedPokemon,
} from "../../redux/actions.js/pokemonActions";
import "./PokemonDetails.css";
import logo from "../../images/pokemon-ash.gif";

const PokemonDetails = () => {
  // const name = useSelector((state) => state?.pokemon[0]?.name);
  const imageUrl = useSelector((state) => state.pokemon[0]?.image);
  const details = useSelector((state) => state.pokemonDetails);
  const [showGif, setShowgif] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToHome = () => {
    dispatch(removePokemons());
    navigate("/");
  };

  const { name } = useParams();
  const [pokemonName, setPokemonName] = useState(name);

  const evolutionHandler = () => {
    setPokemonName(name);
  };

  useEffect(() => {
    const getImage = async () => {
      const res = await fetchImage(name);
      const image =
        res.sprites?.other?.dream_world?.front_default ||
        res.sprites?.other?.home?.front_default;
      dispatch(selectedPokemon({ name, image }));
    };
    getImage();
    dispatch(getPokemonDetails(name));

    setTimeout(() => {
      setShowgif(false);
    }, 1400);

    return () => {
      dispatch(removePokemonDetails());
      setShowgif(true);
    };
  }, [pokemonName, name]);

  return (
    <div className="pokemon-page">
      <button className="home-btn" onClick={navigateToHome}>
        Back To Home
      </button>
      <div className="pokemon-container">
        {showGif && <img src={logo} className="ash-gif" alt="ash" />}
        {details.name && !showGif && (
          <>
            <div className="pokemon-details">
              <div className="pokemon-details-section">
                <div className="name detail-section">
                  <div className="detail-title">
                    <b>Name: </b>
                  </div>
                  <div>{details.name}</div>
                </div>
                <div className="height detail-section">
                  <div className="detail-title">
                    <b>Height: </b>
                  </div>
                  <div>{details.height / 10} m</div>
                </div>
                <div className="name detail-section">
                  <div className="detail-title">
                    <b>Weight: </b>
                  </div>
                  <div>{details.weight / 10} kg</div>
                </div>
                <div className="moves detail-section">
                  <div className="detail-title">
                    <b>Moves: </b>
                  </div>
                  <ul>
                    {details.moves.map((m, i) => (
                      <li key={i}>
                        <span>{i}. </span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="types detail-section">
                  <div className="detail-title">
                    <b>Types: </b>
                  </div>
                  <ul>
                    {details.types.map((t, i) => (
                      <li key={i}>
                        <span>{i}. </span>
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="evolutions detail-section">
                  <div className="detail-title">
                    <b>Evolutions: </b>
                  </div>
                  {details.evolution_chain.map((e_group, i) => (
                    <div key={i}>
                      {e_group.map((e, j) => (
                        <span key={j}>
                          {e && j !== 0 ? <span>-{">"}</span> : ""}
                          {
                            <Link
                              className="evolution-link"
                              to={`/pokemon/${e}`}
                              onClick={evolutionHandler}
                            >
                              {e}
                            </Link>
                          }{" "}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="pokemon-image-container">
              <img
                src={imageUrl}
                alt="Pokemon-Image"
                className="pokemon-image"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PokemonDetails;
