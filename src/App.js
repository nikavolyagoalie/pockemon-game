//простое состояние
import {useState} from 'react';
import {useRouteMatch, Route, Switch, Redirect} from "react-router-dom";
import cn from 'classnames';

import HomePage from "./routes/Home";
import GamePage from "./routes/Game";
import MenuHeader from "./components/MenuHeader";
import Footer from "./components/Footer";
import './App.css';
import s from './style.module.css';
import AboutPage from "./routes/About";
import ContactPage from "./routes/Contact";
import NotFound from "./routes/NotFound";

const App = () => {

    const match = useRouteMatch('/');

    return (
            <Switch>
                //когда ни один из путей не найден
                <Route path="/404" component={NotFound}/>
                <Route>
                    <>
                        <MenuHeader bgActive={!match.isExact}/>
                        <div className={cn(s.wrap,
                                {[s.isHomePage]: match.isExact})}>
                            <Switch>
                                <Route path="/" exact component={HomePage}/>
                                <Route path="/home" component={HomePage}/>
                                <Route path="/game" component={GamePage}/>
                                <Route path="/about" component={AboutPage}/>
                                <Route path="/contact" component={ContactPage}/>
                                <Route render={() => (
                                    <Redirect to="/404"/>
                                )}/>
                            </Switch>
                        </div>
                        <Footer/>
                    </>
                </Route>

            </Switch>
    )

};

export default App;