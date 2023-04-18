import {Posts} from './posts.js';
import {Navbar} from './navbar.js'
import {Filters} from './filters.js'
import {useState,useEffect} from 'react';
import user from './icons/user.png'
import paw from './icons/paw.png'
import { AddPost } from "./AddPost";
import { getMessages, addMessage, getMessagesBetween, getUserById} from '../firebase.js';
import {ChatOrder} from './chatOrder.js'

const myID= "0mg9bB2gmzmOqwvqanBr";

const levID = "jrqjR6pZU3qUnEZkzjYm";
const id1= "iUgNctTeJccdui6TWvRzBTkUZC93";
const id2= "yr8FEWAHu0w1srk2sm27";




export function ChatBox (props) {
    // const {chatvisible, setchatvisible } = props;
    // console.log(chatvisible)



    
    const [Convos, setconvos] = useState([]);
    const [selected, setSelected] = useState([]);
    const [users, setusers] = useState([]);
    function selectConvo (id, convos) {
        setSelected(id);
        //find the convo with the id
        let convo = convos.find(convo => convo.id === id)
    }
 
addMessage(id1, "new", id2, []);
getMessages(id1);
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


//   function handleSend (e) {
//         e.preventDefault();
//         let content = e.target.elements[0].value;
//         addMessage(myID,  content, levID,[]);
//         e.target.elements[0].value = "";
//     }

    return (

    <div classname="chatpage">
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
                        {users.map(user => {
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
                        {Convos.find(convo => convo.id === selected) ? Convos.find(convo => convo.id === selected).convo.map(message => {        
                            return (
                                <div key={message.id} className={`chatbox-message ${message.sender === myID ? 'sent' : 'received'}`}>
                                     <p>{message.content}</p>
                                </div>
                            )
                        }) : null}
                    </div>
                    {/* <form className="chatbox-form" onSubmit={handleSend}>
                        <input type="text" placeholder="Type a message" className="chatbox-input" />
                        <button className="chatbox-button" type="submit">Send</button>
                    </form> */}
            </div>
        </div>
        </div>
    )
}
      



