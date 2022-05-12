import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, serverTimestamp } from "firebase/firestore";

const apiKey = process.env.REACT_APP_FIREBASE_APIKEY;
const authDomain = process.env.REACT_APP_FIREBASE_AUTHDOMAIN;
const projectId = process.env.REACT_APP_FIREBASE_PROJECTID;
const storageBucket = process.env.REACT_APP_FIREBASE_STORAGEBUCKET;
const messagingSenderId = process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID;
const appId = process.env.REACT_APP_FIREBASE_APPID;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: authDomain,
    projectId: projectId,
    storageBucket: storageBucket,
    messagingSenderId: messagingSenderId,
    appId: appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// export async function getPosts() {
//     const postCol = collection(db, 'posts');
//     const postSnapshot = await getDocs(postCol);
//     const postList = postSnapshot.docs.map(doc => doc.data());
//     return postList;
// }

// export async function addPost( name='Ignacio Bockl', description='This is a test post', message='WOW this worked post', photoUrl='' ) {
//     const post = await db.collection(db, 'posts').add({
//         name,
//         description,
//         message,
//         photoUrl,
//         timestamp: FieldValue.serverTimestamp()
//     });
//     return post;
// }


export const addPost = async( name='Ignacio Bockl', description='This is a test post', message='WOW this worked post', photoUrl='' ) => {
    try {
        const docRef = await addDoc(collection(db, 'posts'), {
            name,
            description,
            message,
            photoUrl,
            timestamp: serverTimestamp()
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

export const getPosts = async() => {
  
    try {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        console.log(querySnapshot.docs);
        return querySnapshot.docs;
    } catch (error) {
        console.log('Error: ', error)
    }
}