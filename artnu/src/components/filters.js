import {useState} from "react";

export function Filters(props) {
    const [filter, setFilter] = useState("All Art");

    return (
        <>
            <button onClick={props.handleFilter()}> All Art </button>
            <button onClick={props.handleFilter}> Ceramic </button>
            <button onClick={props.handleFilter}> Painting </button>
        </>
    )
}