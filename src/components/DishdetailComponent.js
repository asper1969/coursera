import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Dishdetail extends Component{

    renderDish(dish){

        const {image,name,description} = dish;

        return (
            <Card>
                <CardImg top src={image} alt={name}/>
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        )
    };

    render(){
        const {dish} = this.props;


        return (
            this.renderDish(dish)
        );
    }
}

export default Dishdetail;