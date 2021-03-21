import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDOUqlCcyC8YQGtt1I45VnDTRteLcgMzT8",
    authDomain: "pockemon-game-mikola.firebaseapp.com",
    databaseURL: "https://pockemon-game-mikola-default-rtdb.firebaseio.com",
    projectId: "pockemon-game-mikola",
    storageBucket: "pockemon-game-mikola.appspot.com",
    messagingSenderId: "764199529041",
    appId: "1:764199529041:web:2866662a4e7ed17c526670"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
