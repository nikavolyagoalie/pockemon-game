import s from'./style.module.css';
import cn from 'classnames';

const MENU_ITEMS = [
    {
        "href": "#welcome",
        "menu_item": "HOME"
    },

    {
        "href": "#game",
        "menu_item": "GAME"
    },

    {
        "href": "#about",
        "menu_item": "ABOUT"
    },

    {
        "href": "#contact",
        "menu_item": "CONTACT"
    }

];

const Menu = ({stateMenu}) => {
    const activeOrDeactive = stateMenu ? s.active : s.deactive;
    return (
        <>
            <div class={cn(s.menuContainer, activeOrDeactive )}>
                <div class={cn(s.overlay)} />
                <div class={cn(s.menuItems)} >
                    <ul>
                        {
                            MENU_ITEMS
                                .map((item) =>
                                    <li>
                                        <a href={item.href}>
                                            {item.menu_item}
                                        </a>
                                    </li>)
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Menu