import React from 'react';

const Comment = ({comment})=> {
    return <li className="list-group-item">
        {comment.snippet.textOriginal}
    </li>
}

export default Comment;