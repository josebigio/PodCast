import React from 'react';

const SearchResult = ({searchResult, onResultClicked})=>{
    return (
        <li onClick={()=>onResultClicked(searchResult)}>
            <p>{searchResult.title}</p>
        </li>
    )
}

export default SearchResult;