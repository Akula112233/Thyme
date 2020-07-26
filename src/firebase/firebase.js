import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBNb-YQUa3Zxme22MioYmfpTYYfAXQBRYY",
    authDomain: "thyme-bf149.firebaseapp.com",
    databaseURL: "https://thyme-bf149.firebaseio.com",
    projectId: "thyme-bf149",
    storageBucket: "thyme-bf149.appspot.com",
    messagingSenderId: "176639028068",
    appId: "1:176639028068:web:cc31cf132c1305ff8ea871"
})

const db = firebaseApp.firestore()

export { db }