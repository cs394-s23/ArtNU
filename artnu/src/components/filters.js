import { useState } from "react";

export function Filters(props) {
  const [filter, setFilter] = useState("All Art");

  function handleClick(newFilter) {
    setFilter(newFilter);
    props.changeFilter(newFilter);
    document.getElementsByClassName(newFilter)[0].style.background = "gray";
  }

  return (
    <div className="filters">
      <button className="All Art" onClick={() => handleClick("All Art")}>All</button>
      <button className="Ceramic" onClick={() => handleClick("Ceramic")}>Ceramic</button>
      <button className="Painting" onClick={() => handleClick("Painting")}>Painting</button>
    </div>
  );
}
