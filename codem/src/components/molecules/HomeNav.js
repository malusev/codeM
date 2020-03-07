import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


export const HomeNavStyle = styled.div`    
`;

export default class HomeNav extends Component {
    
    render () {       
        return (
            <HomeNavStyle>      
                <Link to="/">codeM</Link>
                    <ul>
                        <li>
                        <Link to="/html">Learn HTML</Link>
                        </li>
                        <li>
                        <Link to="/css">Learn CSS</Link>
                        </li>
                    </ul>
            </HomeNavStyle>
        )
    }
}
