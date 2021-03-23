import PockemonCard from "../../components/PockemonCard";
import Layout from "../../components/Layout";
import {useHistory} from 'react-router-dom';

import database from "../../services/firebase";

import '../../App.css';
import {useState, useEffect, useContext} from "react";
import {FireBaseContext} from "../../context/firebaseContext";

const DATA = {
    "abilities": [
        "keen-eye",
        "tangled-feet",
        "big-pecks"
    ],
    "stats": {
        "hp": 63,
        "attack": 60,
        "defense": 55,
        "special-attack": 50,
        "special-defense": 50,
        "speed": 71
    },
    "type": "flying",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "name": "pidgeotto",
    "base_experience": 122,
    "height": 11,
    "id": 17,
    "values": {
        "top": "A",
        "right": 2,
        "bottom": 7,
        "left": 5
    }
}

const GamePage = () => {

    const firebse = useContext(FireBaseContext);
    const [pockemons, setPokemons] = useState({});

    // const getPockemons = async () => {
    //     // database.ref('pokemons').once("value", (snapshot) => {
    //     //     setPokemons(snapshot.val());
    //     // });
    //     const response = await firebse.getPokemonsOnce();
    //     setPokemons(response);
    // };

    useEffect(() => {
        firebse.getPockemonSoket((pokemons) => {
            setPokemons(pokemons);
        });
    }, []);


    const clickCard = (id) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = !pokemon.active;
                };

                acc[item[0]] = pokemon;

                // database.ref('pokemons/' + item[0]).set(pokemon);
                firebse.postPokemon(item[0], pokemon);

                return acc;
            }, {});
        })
    }

    const toHomeButton = () => {
        const data = DATA;

        firebse.addPockemon(data);
    }

    return (
        <>
            <Layout
                colorBg='red'
                title="Cards"
            >
                <div className="flex">
                    {
                        Object.entries(pockemons).map(([key, {id, name, type, img, values, active}]) => <PockemonCard
                                                                 name={name}
                                                                 img={img}
                                                                 key={key}
                                                                 type={type}
                                                                 values={values}
                                                                 id={id}
                                                                 clickCard={() => clickCard(id, key)}
                                                              isActive={active}
                        />)
                    }
                </div>
            </Layout>
            <button
                onClick={toHomeButton}
            >
                Go To Home
            </button>
        </>
    )
}

export  default GamePage;