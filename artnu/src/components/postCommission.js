import { useState } from "react";
import {FileUploader} from "./fileUploader.js";

export function PostCommission(props) {
  const { popUpVisible, togglePopUp } = props;
  const id = Date.now();

  return (
    <div>
      {/* <button onClick={togglePopUp}>Toggle Popup</button> */}
      {popUpVisible && (
        <div className="popup">
          <header>
            <button className="close-popup" onClick={togglePopUp}>Close</button>
            <h3>New Post</h3>
          </header>
          <div className="add-image">
            <FileUploader id={id}/>
          </div>
          <div className="description">
            <strong>DESCRIPTION</strong>
            <p>Tell us about the item you are commissioning. Start with a headline, then add details.</p>
          </div>
          <div className="info">
            <strong>INFO</strong>
            <div className="medium">
              <p>Medium</p>
              <div className="medium-dropdown">
                <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
            <div className="price">
              <p>Price</p>
              <div class="price-input-holder">
                <input type="text" placeholder="$"></input>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
