import { PostCommission } from "./postCommission";
import { useState, useEffect } from "react";



export function Navbar() {

    const [popUpVisible, setPopUpVisible] = useState(false);

    const togglePopUp = () => {
      setPopUpVisible(!popUpVisible);
    }
  
    return (
        <div className="nav">
                <div>
      <PostCommission popUpVisible={popUpVisible} togglePopUp={togglePopUp} />
    </div>
            <button>
                Home
            </button>
            <button>
                Explore
            </button>
            <button onClick={togglePopUp} >
                Com
            </button>
            <button>
                Profile
            </button>
      </div>
    )
}