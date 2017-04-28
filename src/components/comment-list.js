import React from 'react';
import Comment from './comment'

const CommentList = ({comments})=>{

    return(
        <ul className="list-group">
            {comments.map((comment)=>{
                return <Comment comment={comment}/>
            })}
        </ul>
    );
}

export default CommentList;