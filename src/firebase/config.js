import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB9pxCGsnE0gb9gh-SH-qnVIi3GOJI2Y10",
    authDomain: "furniture-webshop-de1fc.firebaseapp.com",
    projectId: "furniture-webshop-de1fc",
    storageBucket: "furniture-webshop-de1fc.appspot.com",
    messagingSenderId: "946451420932",
    appId: "1:946451420932:web:3267ee79282806c568e251",
    measurementId: "G-816QLYBWDC"
};

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const projectFirestore = firebase.firestore()

export { auth, projectFirestore }