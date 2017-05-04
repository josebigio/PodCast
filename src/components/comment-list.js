import React from 'react';
import Comment from './comment'

const CommentList = ({comments})=>{

    return(
        <ul className="list-group list">
            {comments.map((comment,i)=>{
                return <Comment key={i} comment={comment}/>
            })}
        </ul>
    );
}

export default CommentList;