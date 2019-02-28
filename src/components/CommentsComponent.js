import React, {Component} from 'react';

function RenderComment(comments){

    const commentsList = comments.map((item) => {

        const {comment, author, date, id} = item;
        const formatedDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(date)));

        return (
            <li key={id}>
                <p className="text">{comment}</p>
                <p className="info">
                    <span className="delimeter mr-2">--</span>
                    <span className="date mr-2">
                            {formatedDate}
                        </span>
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

function Comments(dish){

    const {comments} = dish;

    return(
        RenderComment(comments)
    );
}

export default Comments;