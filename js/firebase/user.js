'use strict';

let firebase = require('./firebaseConfig'),
    provider = new firebase.auth.GoogleAuthProvider(),
    currentUser = null;


let logInGoogle = () => firebase.auth().signInWithPopup(provider);
let logOut = () => firebase.auth().signOut();
let getUser = () => currentUser;

let setUser = (val) => {
    return new Promise ((resolve) => {
        currentUser = val;
        let myUserId = getUser();
        console.log("my user in user.setUser(): ", myUserId);
        resolve(myUserId);
    });
};


module.exports = {logInGoogle, logOut, getUser, setUser};