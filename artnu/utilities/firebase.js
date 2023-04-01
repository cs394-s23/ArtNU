// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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


export async function readDatabase(){
    const querySnapshot = await getDocs(collection(db, "names"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data()["First"]);
    });
}

export async function addData(first, last, born) {
    try {
        const docRef = await addDoc(collection(db, "names"), {
          first: first,
          last: last,
          born: born
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}