import PockemonCard from "../../../../components/PockemonCard";
import Layout from "../../components/Layout";
import {useHistory} from 'react-router-dom';

import database from "../../services/firebase";

import '../../App.css';
import {useState, useEffect, useContext} from "react";
import {FireBaseContext} from "../../../../context/firebaseContext";


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

        return () => firebase.offPokemonsSoket();
    }, []);


    const clickCard = (id) => {

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
                            isActive={true}
                        />)
                    }
                </div>
            </Layout>
            <button

            >
                Start Game
            </button>
        </>
    )
}

export  default GamePage;