import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import Comment from './CommentsComponent';

function RenderDish(dish){

    const {image,name,description,comments} = dish;

    return(
        <div className="row">
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" top src={image} alt={name}/>
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardText>{description}</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="col-12 col-md-5 m-1">
                <Comment comments={comments}/>
            </div>
        </div>
    );
}

const Dishdetail = (props) => {

    const {dish} = props;

    return (
        <div className="container">
            {RenderDish(dish)}
        </div>
    );
};

export default Dishdetail;