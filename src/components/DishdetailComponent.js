import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import Comment from './CommentsComponent';

function RenderDish(dish,comments){

    const {image,name,description} = dish;

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

    const {dish,comments} = props;

    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to="/home">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to="/menu">Menu</Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    {dish.name}
                </BreadcrumbItem>
            </Breadcrumb>
            {RenderDish(dish,comments)}
        </div>
    );
};

export default Dishdetail;