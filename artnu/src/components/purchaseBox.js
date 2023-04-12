import { useState } from "react";

// test commit

export function PurchaseBox(props) {
  const user = props.user;
  const { popUpVisible, togglePopUp } = props;
  const [orderSubmitted, setOrderSubmitted] = useState(false); // Add a state variable to keep track of order submission

  function handleOrderSubmit() {
    // Code to submit the order
    setOrderSubmitted(true); // Set the orderSubmitted state variable to true after the order has been successfully submitted
  }

  return (
    <div>
      {popUpVisible && (
        <div className="popup-bg">
          <div className={popUpVisible ? "popup-visible" : "popup-hidden"}>
            {orderSubmitted ? (
              <div className="popup-success">
              <button className="close-btn" onClick={togglePopUp}>
                  <i class="fa-solid fa-xmark"></i>
                </button>
                <p>Order sent. Check your <span className="pagelink"><a href="ArtNU/chatbox"> inbox</a></span> for updates.</p>
              </div>
            ) : (
              <div className="addPost">
                <button className="close-btn" onClick={togglePopUp}>
                  <i class="fa-solid fa-xmark"></i>
                </button>
                <h1>Buy {user.author}'s Art</h1>
                <div className="popup-title">
                  <h2>{props.post.title}</h2>
                  <span>1x</span>
                </div>
                <div className = "post-image-box">
                  <img src={props.post.img}></img>
                </div>
                <div className="popup-price">
                  <h2>{props.post.author}</h2>
                  <span> $ {props.post.price}</span>
                </div>
                <div className="popup-input">
                  <input type="text" placeholder="leave a message for your artist"></input>
                  <button onClick={handleOrderSubmit}>
                    <i class="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

       

 
  
      
    

  