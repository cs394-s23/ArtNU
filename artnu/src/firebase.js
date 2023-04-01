// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, addDoc } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADIh59KOywI4OG4ndi_ysf7BfPvRu8hFU",
  authDomain: "cs-394-artnu.firebaseapp.com",
  projectId: "cs-394-artnu",
  storageBucket: "cs-394-artnu.appspot.com",
  messagingSenderId: "789202477848",
  appId: "1:789202477848:web:98074645c37583aec1b46d",
  measurementId: "G-RC8EYYD98P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


export async function readPosts(){
    var posts = []
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
    
      posts.push(doc.data())
      //console.log(doc.data())
    });
    return posts
}


export async function readCommissions(){
    var commissions = []
    const querySnapshot = await getDocs(collection(db, "commissions"));
    querySnapshot.forEach((doc) => {
      //console.log(doc.data());
      commissions.push(doc.data())
    });
    return commissions
}


export async function addPost(price, likes, author, img, medium, caption, tags, date) {
    try {
        const docRef = await addDoc(collection(db, "posts"), {
            price: price,
            likes: likes,
            author, author,
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