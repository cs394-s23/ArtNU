import {Posts} from './posts.js';
import {Navbar} from './navbar.js'
import {Filters} from './filters.js'
import {useState,useEffect} from 'react';
import user from './icons/user.png'
import paw from './icons/paw.png'
import { AddPost } from "./AddPost";
import { getMessages, addMessage, getMessagesBetween, getUserById} from '../firebase.js';
import {ChatOrder} from './chatOrder.js'
import { unstable_ClassNameGenerator } from '@mui/material';
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/app";
import "firebase/firestore";
import { query, onSnapshot, collection, getDocs, getDoc, DocumentReference, addDoc, doc, updateDoc, arrayUnion , setDoc} from "firebase/firestore"; 
import {db} from '../firebase.js'
import { useUser } from '../context/AuthContext.js';


const id1= "0mg9bB2gmzmOqwvqanBr";
const id2= "yr8FEWAHu0w1srk2sm27";

export function ChatBox (props) {
    // const {chatvisible, setchatvisible } = props;
    // console.log(chatvisible)
    var {user} = useUser()

    const [Convos, setConvos] = useState([]);
    const [selected, setSelected] = useState([]);
    const [Users, setUsers] = useState([]);
    const [unsubscribe, setUnsubscribe] = useState(null);
    const [myID, setMyID] = useState(null);

    useEffect(() => {
        if (user) {
            setMyID(user.uid)
            console.log(user.uid)
        }
}, [user]);

    function selectConvo (id, convos) {
        console.log(id)
        setSelected(id);
        //find the convo with the id
        let convo = convos.find(convo => convo.id === id)
    }
        
    
    useEffect(() => {
        if (user){
        console.log(myID)
        const q = query(collection(db, "users", user.uid, "chatrooms"));
        
        const unsubscribe = onSnapshot(q, (snapshot) => {
          let newConvos = [];
          snapshot.forEach((change) => {
            console.log("sent");
            
              const convo = change.data();
              convo.id = change.id;
              newConvos.push(convo);
            
          });
          setConvos(newConvos);
        });
    
        return () => unsubscribe();
    }
      }, [user]);
    
 
    useEffect(() => {
        const users = [];
        async function getUsers() {
        for (let convo of Convos) {
            console.log(convo.id.trim())
            let currUser = await getUserById(convo.id.trim());
            console.log(currUser)
            currUser.id= convo.id;
            users.push(currUser);
        }
        setUsers(users);
    }
    getUsers();
    }, [Convos]);


    function handleSend (e) {
        e.preventDefault();
        let content = e.target.elements[0].value;
        addMessage(user.uid,  content, selected,[]);
        e.target.elements[0].value = "";
    }

    function getChatOrder(message) {
        if (message.postdata.length == 3) {
            return (
                <ChatOrder data = {message.postdata}/>
            )
        }
    }

    if (user){

    return (

    <div className="chatpage">
             <header>
            <div className="logo">
                <img src={paw}></img>
                <span>NU Art</span>
            </div>

            <Navbar/>
                <a href='../ArtNU/profile'>
                <img src={user} className="user"></img>
                </a>
            </header>
        
            <div className="chatbox">
           
                <div className="chatbox-side">
                    <div className="chatbox-header-left">
                        <a>General</a>
                        <a>Orders</a>
                        <a>Commissions</a>
                    </div>
                    <div className="chatbox-list">
                        {/*  convo list */}
                        {Users.map(user => {
                            return (
                                <div className="chatbox-item" onClick={() => selectConvo(user.id, Convos)}>
                                    <img className="profile-pic" src={user.profilepic}></img>
                                    <h2>
                                        {user.author}
                                    </h2>
                                </div>
                        )
                        })}        
                    </div>
                </div>
                <div className="chatbox-main">
                    <div className="chatbox-header-right" >
                        {/*  convo user name */}
                    </div>
                    <div className="chatbox-inner">
                        {/*  convo messages */}
                        <div className = "chat-messages">
                            {Convos.find(convo => convo.id === selected) ? Convos.find(convo => convo.id === selected).convo.map(message => {        
                                return (
                                    <div key={message.id} className="chatbox-message-box">
                                        {getChatOrder(message)}
                                        <p className={`chatbox-message ${message.sender === user.uid ? 'sent' : 'received'}`}>
                                            {message.content}
                                        </p>
                                    </div>
                                )
                            }) : null}
                        </div>
                        <form className="chatbox-form" onSubmit={handleSend}>
                            <input type="text" placeholder="Type a message" className="chatbox-input" />
                        <button className="chatbox-button" type="submit">Send</button>
                    </form>
                    </div>
                    
            </div>
        </div>
        </div>
    )
                        }
}
      



