import React, {Component} from 'react';

class Comments extends Component{

    renderComment(comments) {

        const commentsList = comments.map((item) => {

            const {comment, author, date} = item;

            return (
                <li>
                    <p className="text">{comment}</p>
                    <p className="info">
                        <span className="delimeter mr-2">--</span>
                        <span className="date mr-2"> {date}</span>
                        <span className="name"> {author}</span>
                    </p>
                </li>
            );
        });

        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {commentsList}
                </ul>
            </div>
        );
    }

    render(){
        const {comments} = this.props.dish;

        return(
          this.renderComment(comments)
        );
    }
}

export default Comments;