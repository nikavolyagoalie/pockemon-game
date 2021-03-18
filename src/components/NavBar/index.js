import cn from 'classnames';

import s from'./style.module.css';

import {useState} from "react";

const NavBar = ({onClickBurger, bgActive= false, stateMenu}) => {

    return(
            <nav id={s.navbar} className={cn({
                [s.bgActive]: bgActive
            })}>
                <div className={cn(s.navWrapper)}>
                    <p className={cn(s.brand)}>
                        LOGO
                    </p>
                    <div
                        onClick={onClickBurger}
                        className={cn(s.menuButton, {[s.active]: stateMenu})}>
                        <span/>
                    </div>
                </div>
            </nav>
    )
}

export default NavBar