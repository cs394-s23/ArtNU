// CSS file
import { AddPost } from "./AddPost";
import { useState } from "react";
import { PurchaseBox } from "./purchaseBox"
import { useEffect } from "react";

export function Post(props) {
    const [popUpVisible, setPopUpVisible] = useState(false);
    const [user, setUser] = useState({});
    
    // async function fetchData() {
    //     const data = await props.getUser(props.userRef);
    //     setUser(data);
    //   }

    useEffect(() => {
        async function fetchData() {
          const data = await props.getUser(props.userRef);
          setUser(data);
        }
        fetchData();
      }, []);


  const togglePopUp = () => {
    setPopUpVisible(!popUpVisible);
    console.log("TOGGLE VISIBILITY")
    console.log(popUpVisible)
  }
    return (
    <div className="post"> 
            <PurchaseBox popUpVisible={popUpVisible} togglePopUp={togglePopUp} user = {user}/>

        
        <div className = "post-image-box">
            <img src={props.img}/>
    
            <span className = "post-price"> ${props.price} </span>
            <div className = "btns">
            <button class="buy" onClick={togglePopUp}> Buy </button>

            <button class="commission"> Commission  </button>
            </div>

   
        </div>
            <div className = "sub-image">
                <div className = "info">
                    <h3 className = "author">{user.author}</h3>
                    <h3 className ="title">{props.title}</h3>
                    
                </div>
                <p className = "caption">
                        {props.caption}
                </p> 
            </div>

            
    </div>
    )
}
