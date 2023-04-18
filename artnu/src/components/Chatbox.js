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


const levID = "jrqjR6pZU3qUnEZkzjYm";
const id1= "iUgNctTeJccdui6TWvRzBTkUZC93";
const id2= "yr8FEWAHu0w1srk2sm27";




export function ChatBox (props) {
    // const {chatvisible, setchatvisible } = props;
    // console.log(chatvisible)



    
    const [Convos, setConvos] = useState([]);
    const [selected, setSelected] = useState([]);
    const [Users, setUsers] = useState([]);
    const [unsubscribe, setUnsubscribe] = useState(null);

    function selectConvo (id, convos) {
        setSelected(id);
        //find the convo with the id
        let convo = convos.find(convo => convo.id === id)
    }
        
    
    useEffect(() => {
        const q = query(collection(db, "users", id1, "chatrooms"));
        
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
      }, []);
    
 

   
   


    useEffect(() => {
        const users = [];
        async function getUsers() {
        for (let convo of Convos) {
            let user = await getUserById(convo.id);
            user.id= convo.id;
            users.push(user);
        }

        setUsers(users);
    }
    getUsers();
}, [Convos]);




   

    
      


        
    
           
      
     

        
 


  


    



//     useEffect(() => {
//         console.log("test")
//         async function getConvos() {
//             let convos = await getMessages(id1);
//             let users = [];
//             setconvos(convos);
//         //     for (let convo of convos) {
//         //         let user = await getUserById(convo.id);
//         //         user.id= convo.id;
//         //         users.push(user);
//         //     }
//         //     setusers(users);
//      }
//         getConvos();
//     }, []);


  function handleSend (e) {
        e.preventDefault();
        let content = e.target.elements[0].value;
        addMessage(id1,  content, id2,[]);
        e.target.elements[0].value = "";
    }

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
                                    <div key={message.id} className={`chatbox-message ${message.sender === id1 ? 'sent' : 'received'}`}>
                                        <p>{message.content}</p>
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
      



