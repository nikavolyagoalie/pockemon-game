import s from'./style.module.css';
import cn from 'classnames';

const Menu = ({stateMenu}) => {
    const activeOrDeactive = stateMenu ? s.active : s.deactive;
    return (
        <>
            <div class={cn(s.menuContainer, activeOrDeactive )}>
                <div class={cn(s.overlay)} />
                <div class={cn(s.menuItems)} >
                    <ul>
                        <li>
                            <a href="#welcome">
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="#game">
                                GAME
                            </a>
                        </li>
                        <li>
                            <a href="#about">
                                ABOUT
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                CONTACT
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu