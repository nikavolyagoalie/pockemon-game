import PockemonCard from "../../components/PockemonCard";
import Layout from "../../components/Layout";
import {useHistory} from 'react-router-dom';

import database from "../../services/firebase";

import '../../App.css';
import {useState, useEffect} from "react";



const GamePage = () => {

    // const history = useHistory();
    // const toHomeButton = () => {
    //     history.push('/');
    // }

    const [pockemons, setPokemons] = useState({});

    useEffect(() => {
        database.ref('pokemons/').on("value", (snapshot) => {
            setPokemons(snapshot.val());
        });
    }, []);

    const toHomeButton = () => {
        const keyId = database.ref().child("pokemons").push().key;
        database.ref("pokemons/" + keyId).update({active: !keyId.active});
    }

    const clickCard = (id, key) => {
        setPokemons(prevState => {
            return Object.entries(prevState).reduce((acc, item) => {
                const pokemon = {...item[1]};
                if (pokemon.id === id) {
                    pokemon.active = true;
                    database.ref('pokemons/' + key).update(
                        {
                            active:true
                        }
                    )
                };

                acc[item[0]] = pokemon;
                return acc;
            }, {});
        })
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