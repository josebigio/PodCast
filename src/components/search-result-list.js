import React from 'react';
import SearchResult from './search-result';

const SearchResultList = ({ resultList, onResultClicked }) => {

    return (<div className="search-result-list">
        <ul>
            {
                resultList.map((searchResult) => {
                    return <SearchResult searchResult={searchResult} onResultClicked={onResultClicked} />
                })
            }
        </ul>
    </div>);
}

export default SearchResultList;