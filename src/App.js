import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component{
    state = {
        dishes: DISHES
    };

    render(){
        return(
            <Menu dishes={this.state.dishes}/>
        );
    }
}

export default App;
