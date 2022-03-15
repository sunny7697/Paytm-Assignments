import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPokemonDetails } from "../../redux/actions.js/pokemonActions";
import "./PokemonDetails.css";

const PokemonDetails = () => {
  const name = useSelector((state) => state?.pokemon[0]?.name);
  const imageUrl = useSelector((state) => state.pokemon[0]?.image);
  const details = useSelector((state) => state.pokemonDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(async () => {
    if (!name) navigate("/");
    else dispatch(getPokemonDetails(name));
  }, []);

  return (
    <div className="pokemon-page">
      <div className="pokemon-container">
        {details.name && (
          <div className="pokemon-details">
            <div className="pokemon-details-section">
              <div className="name detail-section">
                <div className="detail-title">
                  <b>Name </b>
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
                {details.evolution_chain.map((e, i) => (
                  <a key={i}>
                    {e && i != 0 ? <span>-{">"}</span> : ""}
                    {e}{" "}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="pokemon-image-container">
          <img src={imageUrl} alt="Pokemon Image" className="pokemon-image" />
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
