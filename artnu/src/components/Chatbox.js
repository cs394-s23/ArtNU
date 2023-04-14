import {Posts} from './posts.js';
import {Navbar} from './navbar.js'
import {Filters} from './filters.js'
import {useState,useEffect} from 'react';
import user from './icons/user.png'
import paw from './icons/paw.png'
import { AddPost } from "./AddPost";
import { getMessages, addMessage, getMessagesBetween, getUserById} from '../firebase.js';


const myID= "0mg9bB2gmzmOqwvqanBr";
const levID = "jrqjR6pZU3qUnEZkzjYm";



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
 
    
    useEffect(() => {
        async function getConvos() {
            let convos = await getMessages(myID);
            setconvos(convos);
        }
        getConvos();
    }, []);


    useEffect(() => {
    async function getusers (convos) {
        let users = [];
        for (let convo of convos) {
            let user = await getUserById(convo.id);
            user.id= convo.id;
            users.push(user);
        }
        setusers(users);
    }
    getusers(Convos);
    }, [Convos]);


 

    

           
 

      


           
    
       
 
        
    
    
    


    
    return ( 
 
    
    
    <div classname="chatpage">
             <header>
            <div className="logo">
                <img src={paw}></img>
                <span>NU Art</span>
            </div>
          
            <Navbar/>
                <a>
                <img src={user} class="user"></img>
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
                        <div className="chatbox-message">
                            <p>{message.content}</p>
                        </div>
                    )
                }) : null}

                    
                
                
             
                </div>
               
    </div>
       
          
        </div>
        </div>
    )
}
      



