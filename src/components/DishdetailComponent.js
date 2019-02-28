import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import Comment from './CommentsComponent';

class Dishdetail extends Component{

    renderDish(dish){
        const {image,name,description,comments} = dish;

        return(
            <div class="row">
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
    };

    render(){
        const {dish} = this.props;

        return (
            <div className="container">
                {this.renderDish(dish)}
            </div>
        );
    }
}

export default Dishdetail;