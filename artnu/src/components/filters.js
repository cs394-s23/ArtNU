import { useState } from "react";

export function Filters(props) {
  const [filter, setFilter] = useState("All Art");
  let oldFilter = ""
  function handleClick(newFilter) {
    oldFilter = filter
    setFilter(newFilter);
    props.changeFilter(newFilter);
    console.log(filter)
    // To change the old one back, can we access the old filter here
    // and to the same style application
  }

  return (
    <div className="filters">
      <button 
            style={{
                border: filter == "All Art" ? '2px solid black' : 'none',
                padding: '10px',
              }}
      className="All Art" value = {"on"} onClick={() => handleClick("All Art")}>All</button>
      <button
                  style={{
                    border: filter == "Ceramic" ? '2px solid black' : 'none',
                    padding: '10px',
                  }}
       className="Ceramic" value = {"off"}onClick={() => handleClick("Ceramic")}>Ceramic</button>
      <button 
                  style={{
                border: filter == "Painting" ? '2px solid black' : 'none',
                padding: '10px',
              }}
      className="Painting" value = {"off"} onClick={() => handleClick("Painting")}>Painting</button>
      {/* <button 
                  style={{
                    border: filter == "Commission" ? '2px solid black' : 'none',
                    padding: '10px',
                  }}
      className="Commission" value = {"off"} onClick={() => handleClick("Commission")}>Commission</button> */}
    </div>
  );
}
