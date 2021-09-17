import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import HeroesPage from "./pages/HeroesPage";
import OneHeroPage from "./pages/OneHeroPage/OneHeroPage";

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route key={'/heroes'} path={'/heroes'} component={HeroesPage} exact/>
                <Route key={'/hero'} path={'/hero/:id'} component={OneHeroPage} exact/>
                <Redirect to={'/heroes'}/>
            </Switch>
        </div>
    );
};

export default Routes;