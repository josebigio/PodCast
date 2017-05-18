import React from 'react';
import Comment from './comment'

const CommentList = ({comments})=>{
    return(
        <ul className="list-group comment-list">
            {comments && comments.map((comment,i)=>{
                return <Comment key={i} comment={comment}/>
            })}
            {!comments && <div className="comment-list-loader-parent"><div className="loader"/></div>}
        </ul>
    );
}

export default CommentList;