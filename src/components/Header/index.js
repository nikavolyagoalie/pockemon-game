import {useHistory} from 'react-router-dom';

import s from'./style.module.css';
import '../../index.css';
import cn from 'classnames';

const Header = ({title, descr, onClickButton}) => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/game');
    }

    return (

            <header className={cn(s.root)}>
                <div className={cn(s.forest)}></div>
                <div className={cn(s.silhouette)}></div>
                <div className={cn(s.moon)}></div>
                <div className={cn(s.container)}>
                    <h1>{title}</h1>
                    <p>{descr}</p>
                    <button onClick={handleClick}>
                        Start Game
                    </button>
                </div>
            </header>

    );
}

export default Header