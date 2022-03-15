export const GenerationSelect = ({ handleInputChange }) => {
  return (
    <select className="minimal" onChange={handleInputChange} defaultValue={"0"}>
      <option value="0" disabled="disabled">
        Select generations of pokemons
      </option>
      <option value="1">First</option>
      <option value="2">Second</option>
      <option value="3">Third</option>
      <option value="4">Fourth</option>
      <option value="5">Fifth</option>
      <option value="6">Sixth</option>
      <option value="7">Seventh</option>
      <option value="8">Eighth</option>
    </select>
  );
};
