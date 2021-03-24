import PockemonCard from "../../../../components/PockemonCard";
import {useHistory} from 'react-router-dom';
import Layout from "../../components/Layout";
import {useHistory} from 'react-router-dom';

import database from "../../services/firebase";

import '../../App.css';
import {useState, useEffect, useContext} from "react";
import {FireBaseContext} from "../../../../context/firebaseContext";
import {PokemonContext} from "../../../../context/pokemonContext";

const StartPage = () => {

    const firebse = useContext(FireBaseContext);
    const pokemonContext = useContext(PokemonContext);
    const [pockemons, setPokemons] = useState({});
    const history = useHistory();

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


    const clickCard = (key) => {
        const pokemon = {...pokemons[key]};
        pokemonContext.onSelectedPokemons(key, pokemon){
        }

        setPokemons(prevState => ({
            ...prevState,
            [key]: {
                ...prevState[key],
                selected: !prevState[key].selected
            }
        }))
    }

    const handleStartGameClick = () => {
        history.push('/game/board');
    }

    return (
        <>
            <Layout
                colorBg='red'
                title="Cards"
            >
                <div className="flex">
                    {
                        Object.entries(pockemons).map(([key, {id, name, type, img, values, selected}]) => <PockemonCard
                            className={s.card}
                            name={name}
                            img={img}
                            key={key}
                            type={type}
                            values={values}
                            id={id}
                            isSelected={selected}
                            isActive={true}
                            clickCard={() => {
                                if (Object.keys(pokemonContext.pokemons).length < 5 || selected) {
                                    clickCard(key)
                                }
                            }}
                        />)
                    }
                </div>
            </Layout>
            <button
                onClick={handleStartGameClick}
                disabled={Object.keys(pokemonsContext.pokemons).length < 5}
            >
                Start Game
            </button>
        </>
    )
}

export  default StartPage;