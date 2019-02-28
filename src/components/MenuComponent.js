import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import Dishdetail from './DishdetailComponent';
import Comments from './CommentsComponent';

class Menu extends Component {

    state = {
        selectedDish: null
    };

    onDishSelect(dish) {

        this.setState({selectedDish: dish})
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card key={dish.id}
                          onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.state.selectedDish !== null ? <Dishdetail dish={this.state.selectedDish}/> : ''}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.state.selectedDish !== null ? <Comments dish={this.state.selectedDish}/> : ''}
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;