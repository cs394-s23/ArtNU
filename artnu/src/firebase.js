// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, getDoc, DocumentReference, addDoc } from "firebase/firestore"; 
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBA7OB8g1kKD2ipI-to-r0FcgTZL3HC4Fs",
  authDomain: "nuart-part-2.firebaseapp.com",
  projectId: "nuart-part-2",
  storageBucket: "nuart-part-2.appspot.com",
  messagingSenderId: "772881649664",
  appId: "1:772881649664:web:0642ff92bfd0664f2708e5",
  measurementId: "G-2LVT1VMP6V"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage();

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
const myID= "0mg9bB2gmzmOqwvqanBr";

export async function getMessages(id){
  var posts = []
  const querySnapshot = await getDocs(collection(db, "users/"+id+"/chatrooms"));
  querySnapshot.forEach(async (doc) => {
  let post = doc.data();
  post.ref = doc.ref;
    posts.push(post);
  });
  console.log(posts);
  // console.log(posts);
  return posts
}


      










// Retrieve all the documents in the chatrooms collection
// chatroomsRef.get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     // Do something with each chatroom document here
//     console.log(doc.id, ' => ', doc.data());
//   });
// }).catch((error) => {
//   console.log('Error getting chatrooms:', error);
// });

// }

export async function readPosts(){
    var posts = []
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach(async (doc) => {
    let post = doc.data();
    post.ref = doc.ref;
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