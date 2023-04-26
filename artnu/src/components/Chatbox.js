import {Posts} from './posts.js';
import {Navbar} from './navbar.js'
import {Filters} from './filters.js'
import {useState,useEffect} from 'react';
import myUser from './icons/user.png'
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
import { Box, TextField, Button, InputBase } from "@mui/material";


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
        // console.log(id)
        setSelected(id);
        //find the convo with the id
        let convo = convos.find(convo => convo.id === id)
        // console.log(selected)
        // console.log(Users)
    }
    
    
    useEffect(() => {
        if (user){
        // console.log(myID)
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
            if (convo.id != "undefined"){
            console.log(convo.id.trim())
            let currUser = await getUserById(convo.id.trim());
            
            console.log(currUser)
            if (currUser){
            currUser.id= convo.id;
            users.push(currUser);
            }}
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
        if (message.orderid) {
            return (
                <ChatOrder data = {message} />
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
                <img src={myUser} className="user"></img>
                </a>
            </header>
        
            <div className="chatbox">
           
                <div className="chatbox-side">
                    <div className="chatbox-header-left">
                        <p>{selected.length == 0 ? "Select a chat from the user list below" : ""}</p>
                    </div>
                    <div className="chatbox-list">
                        {/*  convo list */}
                        {Users.map(user => {
                            return (
                                <div className={`chatbox-item ${user.id === selected ? 'select' : ''}`} onClick={() => selectConvo(user.id, Convos)}>
                                    
                                    {/* <img className="profile-pic" src={user.profilepic}></img> */}
                                    <img className="profile-pic" src={"https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"}></img>
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
                    </div>
                    <div className="chatbox-inner">
                        
                        <div className = "chat-messages">
                            {Convos.find(convo => convo.id === selected) ? Convos.find(convo => convo.id === selected).convo.map(message => {        
                                return (
                                    <div key={message.id} className="chatbox-message-box">
                                        <div className={`${message.sender === user.uid ? 'sent' : 'received'}`}>
                                            {message.orderid ? getChatOrder(message): null}
                                            <p className={`chatbox-message`}>
                                                {message.content}
                                            </p>
                                        </div>
                                        
                                    </div>
                                )
                            }) : null}
                        </div>
                        <form onSubmit={handleSend}>
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <InputBase
      placeholder="Type a message"
      sx={{ mr: 1, flexGrow: 1, borderRadius: '20px', border: '2px solid #ddd', p: '10px' }}
    />
    <Button
      type="submit"
      variant="contained"
      sx={{ borderRadius: '20px', backgroundColor: '#1a73e8', color: '#fff' }}
    >
      Send
    </Button>
  </Box>
</form>
                    </div>
                    
            </div>
        </div>
        </div>
    )
                        }
}
      



