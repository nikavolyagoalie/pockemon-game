import s from'./style.module.css';
import Menu from "../Menu";
import NavBar from "../NavBar";
import {useState} from "react";

const MenuHeader = () => {
    const [state, menuState] = useState(false)

    const handleClickBurger = () => {
        menuState(!state);
    }

    return(
        <>
            <Menu
                stateMenu={state}
            />
            <NavBar
                onClickBurger={handleClickBurger}
                stateMenu={state}
            />
        </>
    )
}

export default MenuHeader