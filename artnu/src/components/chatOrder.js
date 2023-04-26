import { setDefaultEventParameters } from '@firebase/analytics';
import { useState, useEffect } from 'react';
import { useUser } from '../context/AuthContext.js';
import { addMessage, updateOrder, getOrderById } from '../firebase.js';


export function ChatOrder(props) {
  const [confirm, setConfirm] = useState(null);
  const [myID, setMyID] = useState(null);
  const [order, setOrder] = useState([]);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setMyID(user.uid);
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
        const order_data = await getOrderById(props.data.orderid)
        setOrder(order_data.data)
    }
    fetchData();
}, [])

  function handleClick() {
      // const docRef = getOrderById(props.data.orderid)
      async function updateConfirm() {
        const order_data = await getOrderById(props.data.orderid)
        order_data.data[4] = !order_data.data[4];
        updateOrder(order_data.data, props.data.orderid)
        setOrder(order_data.data)
      }
      updateConfirm();
  }


  let [img, author, price, title, confirmed]  = order
  return (
    <div className={`chatOrder ${props.sender === myID ? 'sent' : 'received'}`}>
      <div className="order-info">
        <h1>Order For: {title} </h1>
        <div className="order-price">
          <p>Price</p>
          <p>${price}</p>
        </div>
      </div>
      <div className="img-container">
        <img src={img} />
      </div>
      <button className={`confirmbtn ${order[4] === true ? 'confirmed' : 'notconfirmed'}`} onClick={handleClick}>
        {order[4] === true ? 'Confirmed' : 'Confirm'}
      </button>
    </div>
  );
}

