import s from'./style.module.css';
import cn from 'classnames';
import {useState} from "react";

const NavBar = ({onClickBurger, stateMenu}) => {

    const [isActive, setActive] = useState(stateMenu)

    const handler = () => {
        onClickBurger && onClickBurger(!isActive);
        setActive(!isActive);
    }

    return(
        <>
            <nav id={cn(s.navbar)}>
                <div className={cn(s.navWrapper)}>
                    <p className={cn(s.brand)}>
                        LOGO
                    </p>
                    <a onClick={handler} className={cn(s.menuButton, {[s.active]: isActive})}>
                        <span/>
                    </a>
                </div>
            </nav>
        </>
    )
}

export default NavBar