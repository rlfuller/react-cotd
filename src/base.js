import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCSv2Cjt4s2jfIUQT5r0sxxTc7hsKUZJGM",
    authDomain: "catch-of-the-day-rachelfuller.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-rachelfuller.firebaseio.com",
    // projectId: "catch-of-the-day-rachelfuller",
    // storageBucket: "catch-of-the-day-rachelfuller.appspot.com",
    // messagingSenderId: "319718295703",
    // appId: "1:319718295703:web:a207c8f108c87eab"
});

const base = Rebase.createClass(firebaseApp.database());

//This is a named export
export {firebaseApp};

//this is a defalt export
export default base;