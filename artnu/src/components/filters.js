import { useState } from "react";

export function Filters(props) {
  const [filter, setFilter] = useState("All Art");

  function handleClick(newFilter) {
    setFilter(newFilter);
    props.changeFilter(newFilter);
  }

  return (
    <div>
      <button onClick={() => handleClick("All Art")}>All</button>
      <button onClick={() => handleClick("Ceramic")}>Ceramic</button>
      <button onClick={() => handleClick("Painting")}>Painting</button>
      <p>Current filter: {filter}</p>
    </div>
  );
}
