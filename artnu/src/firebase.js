// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/app";
import "firebase/firestore";
import { query, onSnapshot, collection, getDocs, getDoc, DocumentReference, addDoc, doc, updateDoc, arrayUnion , setDoc} from "firebase/firestore"; 
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyBA7OB8g1kKD2ipI-to-r0FcgTZL3HC4Fs",
  // authDomain: "nuart-part-2.firebaseapp.com",
  // databaseURL: "https://nuart-part-2-default-rtdb.firebaseio.com",
  // projectId: "nuart-part-2",
  // storageBucket: "nuart-part-2.appspot.com",
  // messagingSenderId: "772881649664",
  // appId: "1:772881649664:web:0642ff92bfd0664f2708e5",
  // measurementId: "G-2LVT1VMP6V"
  apiKey: "AIzaSyABH1UACr6MWu_NyW7F2Kz9UCfazSoZYms",
  authDomain: "artnu-3.firebaseapp.com",
  projectId: "artnu-3",
  storageBucket: "artnu-3.appspot.com",
  messagingSenderId: "710170288344",
  appId: "1:710170288344:web:4de13f90cfed4be94737ad",
  measurementId: "G-77RCSWTVFC"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
const myID= "0mg9bB2gmzmOqwvqanBr";
// export async function getMessages(id) {
//   const convos = [];
//   const q = query(collection(db, "users", id, "chatrooms"));

//   const unsubscribe = onSnapshot(q, (snapshot) => {
//     snapshot.docChanges().forEach((change) => {
//       const doc = change.doc;
//       if (change.type === "added") {
//         const convo = change.doc.data();
//         convo.ref = change.doc.ref;
//         convo.id = change.doc.id;
//         convos.push(convo);
//       } 
//     });
//   });

//   return () => unsubscribe();
// }




  

    // const querySnapshot = await getDocs(collection(db, "users/"+id+"/chatrooms"));
  // querySnapshot.forEach(async (doc) => {
  // let convo = doc.data();
  // convo.ref = doc.ref;
  // convo.id = doc.id;

  //   convos.push(convo);
  // });

  // // console.log(posts);
  // return convos



export async function getUserById(id){
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);


  
  return docSnap.data();
}

export async function getMessagesBetween(id, receiverID){
  var convos = []
  const querySnapshot = await getDocs(collection(db, "users/"+id+"/chatrooms"));
  querySnapshot.forEach(async (doc) => {
  let convo = doc.data();
  if (doc.id == receiverID) {
     return convo.convo;
  }

  


getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
  });

  // console.log(posts);
  return convos
}







export async function addMessage(id, message, receiverID,postdata) {
  try { 

    const docRef = doc(db, "users/"+id+"/chatrooms"+"/"+receiverID);
    // await updateDoc(docRef, {
    //   convo: arrayUnion({ sender: id, 
    //     content: message , postdata: postdata})
    // });
    await setDoc(
      docRef, {
        convo: arrayUnion({ sender: id,
          content: message, postdata: postdata })
      }, { merge: true }

    )
    /* mirror the message in the receiver's chatroom */
    const docRef2 = doc(db, "users/"+receiverID+"/chatrooms"+"/"+id);
    // await updateDoc(docRef2, {
    //   convo: arrayUnion({ sender: id,
    //     content: message, postdata: postdata })
    // });
    await setDoc(
      docRef2, {
        convo: arrayUnion({ sender: id,
          content: message, postdata: postdata })
      }, { merge: true })


    

    console.log("Message added successfully!");
  } catch (error) {
    console.error("Error adding message: ", error);
  }






}
      
// export async function addMessage(id, message, receiverID) {
//   // const levID = "jrqjR6pZU3qUnEZkzjYm";
    
//   // const docRef = await addDoc(collection(db, "users/"+id+"/chatrooms")[receiverID]["convo"], 
//   // {content: message, 
//   // sender: id});
//   // Get a reference to the chatroom document
// // const chatroomRef = Firestore().collection("users/"+id+"/chatrooms").doc(receiverID);
//  const querySnapshot = await getDocs(collection(db, "users/"+id+"/chatrooms"));

//  const newMessage = {
//   sender: id,
//   content: message
// };

//  querySnapshot.forEach(async (doc) => {
//   if (doc == receiverID) {
//     doc.convos.push(newMessage)
//   }
//  }
//  )


// // Add the new message to the chatroom's messages array

// chatroomRef.update({
//   convos: firebase.firestore.FieldValue.arrayUnion(newMessage)
// })
// .then(() => {
//   console.log("New message added to chatroom.");
// })
// .catch((error) => {
//   console.error("Error adding new message to chatroom: ", error);
// });
  
// }









// // Retrieve all the documents in the chatrooms collection
// // chatroomsRef.get().then((querySnapshot) => {
// //   querySnapshot.forEach((doc) => {
// //     // Do something with each chatroom document here
// //     console.log(doc.id, ' => ', doc.data());
// //   });
// // }).catch((error) => {
// //   console.log('Error getting chatrooms:', error);
// // });

// // }

export async function readPosts(){
    var posts = []
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach(async (doc) => {
    let post = doc.data();
    post.ref = doc.ref;
    post.id = doc.id;
      posts.push(post);
    });
    // console.log(posts);
    return posts
}

export const posts_data = readPosts();
/*
export async function readCommissions(){
    var commissions = []
    const querySnapshot = await getDocs(collection(db, "commissions"));
    querySnapshot.forEach((doc) => {
      //console.log(doc.data());
      commissions.push(doc.data())
    });
    return commissions
}
export async function AddPost(price, likes, author, img, medium, caption, tags, date) {
    try {
        const docRef = await addDoc(collection(db, "posts"), {
            price: price,
            likes: likes,
            author: author,
            img: img,
            medium: medium,
            caption: caption,
            tags: tags,
            date: date
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
export async function addCommission() {
    try {
        const docRef = await addDoc(collection(db, "commissions"), {
            
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
*/