import {hot} from 'react-hot-loader';
import React, {Component} from 'react';
import styled from 'styled-components';

declare const module: any;

const Base = styled.div`
  
`;

export class App extends Component {
    render() {
        return (
            <Base>
                Parcel - React - TypeScript - App
            </Base>
        );
    }
}

export default hot(module)(App);
