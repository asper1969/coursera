import React, {Component} from 'react';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

const mapStateProps = state => {

    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
};

class Main extends Component {

    onDishSelect(dishId) {
        this.setState({selectedDish: dishId});
    }

    render() {

        const HomePage = () => {

            return (
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotions={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        };

        const DishWithId = ({match}) => {

            return (
                <DishDetail
                    dish={this.props.dishes.filter(
                        (dish) => dish.id === parseInt(match.params.dishId, 10))[0]
                    }
                    comments={this.props.comments.filter(
                        (comment) => comment.dishId === parseInt(match.params.dishId, 10))
                    }
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/aboutus" component={
                                () => <div>
                                    <About leaders={this.props.leaders}/>
                                </div>
                            }
                    />
                    <Route exact path="/menu"
                           component={
                               () => <div>
                                   <Menu
                                       dishes={this.props.dishes}
                                       onClick={
                                           (dishId) => this.onDishSelect(dishId)
                                       }/>
                               </div>
                           }
                    />
                    <Route path='/menu/:dishId' component={DishWithId}/>
                    <Route exact path="/contactus" component={Contact}/>
                    <Redirect to="/home"/>
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateProps)(Main));