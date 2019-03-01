import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Switch, Route, Redirect} from 'react-router-dom';

import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import {DISHES} from '../shared/dishes';
import {PROMOTIONS} from '../shared/propmotions';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';

class Main extends Component {

    state = {
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS
    };

    onDishSelect(dishId) {
        this.setState({selectedDish: dishId});
    }

    render() {

        const HomePage = () => {
            console.log(this.state.promotions.filter((promo) => promo.featured)[0])

            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotions={this.state.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        if (this.state.selectedDish == undefined) return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/menu"
                           component={
                               () => <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)}/>
                           }
                    />
                    <Route exact path="/contactus" component={Contact} />
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
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home"/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;