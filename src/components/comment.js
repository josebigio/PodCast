import React, { Component } from 'react';
import CountIcon from './count-icon'
import ReplyList from './reply-list';

class Comment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selected:false
        }
    }

    handleClick() {
        this.setState({
            selected:!this.state.selected
        });
    }

    render() {
        const { comment, showReplies } = this.props;
        const { snippet, replies } = comment;
        const { likeCount, textDisplay, authorDisplayName } = snippet.topLevelComment.snippet;
        return <li className="list-group-item clickable" onClick={this.handleClick.bind(this)}>
            <h6>{authorDisplayName}</h6>
            <div dangerouslySetInnerHTML={{ __html: textDisplay }} />
            <CountIcon count={likeCount} color="#ffaaff" radius="30px" />
            {this.state.selected && <ReplyList replies={replies.comments} />}
        </li>
    }


}


export default Comment;