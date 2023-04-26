import React, {useState, useEffect, useRef} from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
import { Link } from 'react-router-dom';
import { user_list } from "../firebase.js"
import { ArtistCard } from './artistCard.js';
import leftArrow from './icons/button_left.png';
import rightArrow from './icons/button_right.png';




export function UserList(){
    const [userList, setUserList] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef(null);
    const cardRef = useRef(null);
  
    useEffect(() => {
      const dp = user_list
      .then(data => {
        let user = data.slice(0,2)
        setUserList(user)
      })
    }, [])
  
    useEffect(() => {
      const container = containerRef.current;
      const cardWidth = cardRef.current.offsetWidth;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const targetPosition = Math.min(currentIndex * cardWidth - container.clientWidth / 2 + cardWidth / 2, maxScroll);
      container.scrollTo({
        left: targetPosition,
        behavior: 'smooth',
      });
    }, [currentIndex]);
  
    const scrollLeft = () => {
      if (currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      }
    };
    
    const scrollRight = () => {
      if (currentIndex < userList.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };
  
    return (
      <>
        <div className="user-list-container">
          <div className="scroll-button-container">
            <img className="scroll-button" src={leftArrow} onClick={scrollLeft} />
          </div>
          <div className="scroll-button-container">
            <img className="scroll-button" src={rightArrow} onClick={scrollRight} />
          </div>
          <div className="artistfeed-container">
            <div className="artistfeed" ref={containerRef}>
              <div ref={cardRef} style={{ width: '50%'}}></div>
              {userList.map((user, index) => (
                <div key={user.id} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                  <ArtistCard
                    author={user.author}
                    hometown={user.hometown}
                    interests={user.interests}
                    major={user.major}
                    year={user.year}
                    uid={user.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  };