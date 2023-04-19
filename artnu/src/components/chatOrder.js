import {useState,useEffect} from 'react';

export function ChatOrder(props) {
    const [confirm, setConfirm] = useState(false);
    
    function handleClick() {
        setConfirm(true)
        console.log("clicked", confirm)
    };

    let img = props.data[0];

    return (
        <div className = "chatOrder">
            <div className = "order-info">
                <h1>Order For: </h1>
                <div className = "order-price">
                    <p>Price</p>
                    <p>${props.data[2]}</p>
                </div>
                
            </div>
            <div className = "img-container">
                <img src = {img}/>
            </div>
            <button className="order-confirm" onClick={handleClick}>
                Confirm section (to do)
            </button>
        </div>
    )
}