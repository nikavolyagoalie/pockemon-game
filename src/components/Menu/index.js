import cn from 'classnames';

import {Link} from 'react-router-dom';

import s from'./style.module.css';


const MENU_ITEMS = [
    {
        to: "/",
        title: "HOME"
    },

    {
        to: "/game",
        title: "GAME"
    },

    {
        to: "/about",
        title: "ABOUT"
    },

    {
        to: "/contact",
        title: "CONTACT"
    }

];

const Menu = ({stateMenu}) => {

    return (
        <>
            <div className={cn(s.menuContainer, {[s.active]: stateMenu === true, [s.deactive]: stateMenu === false} )}>
                <div classNamr={cn(s.overlay)} />
                <div>
                    <ul>
                        {
                            MENU_ITEMS
                                .map(({to, title}, index) =>
                                    <li key={index}>
                                        <Link to={to}>
                                            {title}
                                        </Link>
                                    </li>)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu