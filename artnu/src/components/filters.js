import { useState } from "react";

export function Filters(props) {
  const [filter, setFilter] = useState("All Art");
  let oldFilter = ""
  function handleClick(newFilter) {
    oldFilter = filter
    setFilter(newFilter);
    props.changeFilter(newFilter);
    document.getElementsByClassName(oldFilter)[0].style.background = "white";
    document.getElementsByClassName(newFilter)[0].style.background = "grey";
    // To change the old one back, can we access the old filter here
    // and to the same style application
  }

  return (
    <div className="filters">
      <button className="All Art" value = {"on"} onClick={() => handleClick("All Art")}>All</button>
      <button className="Ceramic" value = {"off"}onClick={() => handleClick("Ceramic")}>Ceramic</button>
      <button className="Painting" value = {"off"} onClick={() => handleClick("Painting")}>Painting</button>
    </div>
  );
}
