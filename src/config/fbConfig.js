import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
// Initialize Firebase
var config = {
    apiKey: "AIzaSyAImxPgpU-fMkdPDmTkL2ABoGQjgd94LWY",
    authDomain: "mario-plan-16134.firebaseapp.com",
    databaseURL: "https://mario-plan-16134.firebaseio.com",
    projectId: "mario-plan-16134",
    storageBucket: "mario-plan-16134.appspot.com",
    messagingSenderId: "226269622764"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots : true });
export default firebase;
