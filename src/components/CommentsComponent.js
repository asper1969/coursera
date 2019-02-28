import React, {Component} from 'react';

class Comments extends Component{

    renderComment(comments) {

        const commentsList = comments.map((item) => {

            const {comment, author, date} = item;
            const formatedDate = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(date)));

            return (
                <li>
                    <p className="text">{comment}</p>
                    <p className="info">
                        <span className="delimeter mr-2">--</span>
                        <span className="date mr-2">
                            {/*{new Intl.DateTimeFormat(*/}
                                {/*'en-US',*/}
                                {/*{*/}
                                    {/*year: 'numeric',*/}
                                    {/*month: 'short',*/}
                                    {/*day: '2-digit'*/}
                                {/*}).format(new Date(Date.parse({date})))*/}
                            {/*}*/}

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

    render(){
        const {comments} = this.props;

        return(
          this.renderComment(comments)
        );
    }
}

export default Comments;