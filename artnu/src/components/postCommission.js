import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import {db} from "../firebase.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';


export function PostCommission(props) {
  const [file, setFile] = useState(null);
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const { popUpVisible, togglePopUp } = props;
  const id = Date.now();
  const [newPost, setNewPost] = useState({
    price: null,
    likes: 0,
    author: "",
    img: "",
    medium: "",
    caption: "",
    tags: [],
    date: null,
    title: ""
  });

  async function getPhoto(id) {
    const storage = getStorage();
    const storageRef = ref(storage, `images/${id}`);
    const snapshot = await uploadBytes(storageRef, file)
    return await getDownloadURL(snapshot.ref);
  }

  async function handlePost() {
    try {
        if (file) {
          let url = await getPhoto(id);
          console.log(url);
          
          const docRef = await addDoc(collection(db, "posts"), {
            price: newPost.price,
            likes: newPost.likes,
            author: newPost.author,
            img: url,
            medium: newPost.medium,
            caption: newPost.caption,
            tags: newPost.tags,
            date: Date.now(),
            title: newPost.title
          });
          console.log("Document written with ID: ", docRef.id);
        }
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewPost({ ...newPost, [name]: value });
  };

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
            <input type="file" onChange={handleFileChange} />
          </div>
          <div className="description">
            <strong>Details</strong>
            <input
              type="text"
              name="title"
              value={newPost.title}
              onChange={handleInputChange}
              placeholder="Name Your Piece!"
            />
            <input
              type="text"
              name="caption"
              value={newPost.caption}
              onChange={handleInputChange}
              placeholder="Tell us about the item!"
            />
            
            {/* <p>Tell us about the item you are commissioning. Start with a headline, then add details.</p> */}
          </div>
          <div className="info">
            {/* <strong>INFO</strong> */}
            <div className="medium">
              <p>Medium</p>
              <div className="medium-dropdown">
                {/* <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a> */}
                  <input 
                    type="text"
                    name="medium"
                    value={newPost.medium}
                    onChange={handleInputChange}
                    placeholder="Ceramic or Painting"
                  />
                </div>
              </div>
            </div>
            <div className="price">
              <p>Price</p>
              <div class="price-input-holder">
                <input 
                  type="text" 
                  name="price"
                  value={newPost.price}
                  placeholder="$"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="author">
              <p>Author</p>
              <div class="price-input-holder">
                <input 
                  type="text" 
                  name="author"
                  value={newPost.author}
                  placeholder="John Doe"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <button onClick={handlePost} className="post">Post</button>
          </div>
        // </div>
      )}
    </div>
  );
}

