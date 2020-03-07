import React, { Component } from 'react';
import styled from 'styled-components';
import { Switch, Route } from "react-router-dom";
import Html from '../../organisms/Html';
import Css from '../../organisms/Css';
import HomeNav from '../../molecules/HomeNav';


export const HomePageStyle = styled.div`    
    position: relative;
`;

export default class HomePage extends Component {
    
    render () {       
        return (
            <HomePageStyle>      
                <header className="App-header">
                    <HomeNav />
                </header>
                <Switch>
                    <Route path="/html">
                        <Html />
                    </Route>
                    <Route path="/css">
                        <Css />
                    </Route>
                </Switch>
            </HomePageStyle>
        )
    }
}
