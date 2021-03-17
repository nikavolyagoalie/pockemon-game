//простое состояние
import {useState} from 'react';
import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import styles from './App.css';

const App = () => {
    const [page, setPage] = useState('app'); //хук useState принимает строку 'app'

    const handleChangePage = (page) => {
        setPage(page);
    }

    switch(page){
        case "app":
            return <HomePage onChangePage={handleChangePage}/>
        case "game":
            return <GamePage onChangePage={handleChangePage}/>
        default:
            return <HomePage/>
    }
};

export  default App;