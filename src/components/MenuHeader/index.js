import {useState} from "react";
import Menu from "../Menu";
import NavBar from "../NavBar";


const MenuHeader = ({bgActive}) => {
    const [state, menuState] = useState(null)

    const handleClickBurger = () => {
        menuState(prevState => !prevState);
    }

    return(
        <>
            <Menu
                stateMenu={state}
            />
            <NavBar
                onClickBurger={handleClickBurger}
                stateMenu={state}
                bgActive={bgActive}
            />
        </>
    )
}

export default MenuHeader