
import  firebase from 'firebase';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAx8iIYJp8-PTcPGzHBvsn3-ZDm4ai8C4Y",
    authDomain: "clonedisney-byc.firebaseapp.com",
    projectId: "clonedisney-byc",
    storageBucket: "clonedisney-byc.appspot.com",
    messagingSenderId: "774887555984",
    appId: "1:774887555984:web:074089612cb84ce1b1e915",
    measurementId: "G-FETRPR355G"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export {auth,provider, storage };
export default db;