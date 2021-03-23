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

class Firebase{
    constructor() {


        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            callBack(snapshot.val());
        })
    }

    offPokemonSoket = () => {
        this.database.ref('pokemons').off()
    }

    getPockemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value').then(snapshot => snapshot.val());
    }

    postPokemon = (key, pokemon) => {
        this.database.ref(`pokemons/${key}`.set(pokemon));
    }

    addPokemon = (data, callBack) => {
        const newKey = this.database.ref().child('pokemons').push().key;
        this.database.ref('pokemons/' + newKey).set(data).then(() => callBack());
    }
}

export default Firebase;
