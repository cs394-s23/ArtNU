import { useState, useEffect } from 'react';
import { useUser } from '../context/AuthContext.js';
import { addMessage } from '../firebase.js';


export function ChatOrder(props) {
  const [confirm, setConfirm] = useState(false);
  const [myID, setMyID] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setMyID(user.uid);
    }
  }, [user]);

  function handleClick() {
      setConfirm(true);
      console.log("props",props.data)  
  }


  let [img, author, price]  = props.data;
  // console.log("myID",myID)
  
  return (
    <div className={`chatOrder ${props.sender === myID ? 'sent' : 'received'}`}>
      <div className="order-info">
        <h1>Order For: </h1>
        <div className="order-price">
          <p>Price</p>
          <p>${price}</p>
        </div>
      </div>
      <div className="img-container">
        <img src={img} />
      </div>
      <button className={`confirmbtn ${confirm === true ? 'confirmed' : 'notconfirmed'}`} onClick={handleClick}>
        {confirm === true ? 'Confirmed' : 'Confirm'}
      </button>
    </div>
  );
}

