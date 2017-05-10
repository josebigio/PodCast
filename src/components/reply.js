import React from 'react';
import CountIcon from './count-icon'

const Reply = ({snippet})=>{
    return (
        <li className="list-group-item" >
            <h6>{snippet.authorDisplayName}</h6>
            <div dangerouslySetInnerHTML={{__html:snippet.textDisplay}}/>
            <CountIcon count={snippet.likeCount} color="#ffaaff" radius="30px" />
        </li>
    );
}

export default Reply;