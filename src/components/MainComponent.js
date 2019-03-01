import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Switch, Route, Redirect} from 'react-router-dom';

import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {DISHES} from '../shared/dishes';

class Main extends Component {

    state = {
        dishes: DISHES,
        selectedDish: null
    };

    onDishSelect(dishId) {
        console.log(dishId);
        this.setState({selectedDish: dishId});
    }

    render() {

        const HomePage = () => {

            return (
                <Home/>
            );
        };

        if (this.state.selectedDish == undefined) return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route exact path="/menu"
                           component={
                               () => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
                           }
                    />
                    <Redirect to="/home"/>
                </Switch>
                <div>...</div>
                <Footer />
            </div>
        );

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu"
                           component={
                               () => <div>
                                           <Menu
                                               dishes={this.state.dishes}
                                               onClick={
                                                   (dishId) => this.onDishSelect(dishId)
                                               }/>
                                           <DishDetail
                                               dish={this.state.dishes.filter(
                                                   (dish) => dish.id === this.state.selectedDish)[0]
                                               }/>
                                     </div>
                           }
                    />
                    <Redirect to="/home"/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;