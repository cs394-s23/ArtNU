import {useState} from "react";

export function Filters(props) {
    const [filter, setFilter] = useState("All Art");

    return (
        <>
            <button onClick={props.handleFilter} value="All Art"> All Art </button>
            <button onClick={props.handleFilter} value= "Ceramic"> Ceramic </button>
            <button onClick={props.handleFilter} value ="Painting"> Painting </button>
        </>
    )
}