import React from 'react';
import Reply from './reply'

const ReplyList = ({replies})=>{
    return (
        <ul className="list-group">
            {replies.map((comment)=>{
                return <Reply snippet={comment.snippet} key={comment.snippet.textDisplayName}/>
            })}
        </ul>
    );
}

export default ReplyList;