import s from './style.module.css';
import {PokemonContext} from "../../../../context/pokemonContext";
import {useContext} from "react";
import PockemonCard from "../../../../components/PockemonCard";

const BoardPage = () => {
    const { pokemons } = useContext(PokemonContext);

    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                {
                    Object.values(pokemons).map(({id, name, img, type, values}) => (
                        <PockemonCard
                            className={s.card}
                            name={name}
                            img={img}
                            key={key}
                            type={type}
                            values={values}
                            id={id}
                            isSelected={selected}
                            isActive
                            minimize
                        />
                    ))
                }
            </div>
            <div className={s.board}>
                <div className={s.boardPlate}>1</div>
                <div className={s.boardPlate}>2</div>
                <div className={s.boardPlate}>3</div>
                <div className={s.boardPlate}>4</div>
                <div className={s.boardPlate}>5</div>
                <div className={s.boardPlate}>6</div>
                <div className={s.boardPlate}>7</div>
                <div className={s.boardPlate}>8</div>
                <div className={s.boardPlate}>9</div>
            </div>
        </div>
    );
};

export default BoardPage;