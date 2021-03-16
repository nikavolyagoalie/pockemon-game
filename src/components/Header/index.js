import s from'./style.module.css';
import cn from 'classnames';

const Header = ({title, descr, onClickButton}) => {
    const handleClick = () => {
        onClickButton && onClickButton('game');
    }

    return (
        <>
            <header className={cn(s.root)}>
                <div className={cn(s.forest)}></div>
                <div className={cn(s.container)}>
                    <h1>{title}</h1>
                    <p>{descr}</p>
                    <button onClick={handleClick}>
                        Start Game
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header