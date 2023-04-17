import { useState } from "react";
import { getMessages, addMessage, getMessagesBetween, getUserById} from '../firebase.js';

const myID= "0mg9bB2gmzmOqwvqanBr";
// test commit

export function PurchaseBox(props) {
  const post = props.post;
  const { popUpVisible, togglePopUp } = props;
  const [orderSubmitted, setOrderSubmitted] = useState(false); // Add a state variable to keep track of order submission

 
  function handleOrderSubmit (e) {
    e.preventDefault();
    let content = e.target.elements[0].value;
    console.log(content)
    const postdata= [post.img, post.title, post.author, post.price]
    //user id
    const userid = props.user.id;
    
    console.log (userid)
    addMessage(myID,  content, userid, postdata);
    e.target.elements[0].value = "";
    setOrderSubmitted(true);
  
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
                <p>Order sent. Check your <span className="pagelink"><a href="../ArtNU/chatbox"> inbox</a></span> for updates.</p>
              </div>
            ) : (
              <div className="addPost">
                <button className="close-btn" onClick={togglePopUp}>
                  <i class="fa-solid fa-xmark"></i>
                </button>
                <h1>Buy {props.post.author}'s Art</h1>
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
                <form className="popup-input" onSubmit={handleOrderSubmit}>
                        <input type="text" placeholder="Type a message" className="chatbox-input" />
                        <button type="submit">
                        <i class="fa-solid fa-paper-plane"></i>
                       </button>
                  </form>
                
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

       

 
  
      
    

  