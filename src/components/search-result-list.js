import React from 'react';
import SearchResult from './search-result';

const SearchResultList = ({ resultList, onResultClicked, onMouseEnter, onMouseLeave }) => {

    return (
        <div className="search-result-list"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {resultList.length > 0 &&
            <ul>
                {
                    resultList.map((searchResult) => {
                        return <SearchResult searchResult={searchResult} onResultClicked={onResultClicked} />
                    })
                }
            </ul>}
        </div>
    );
}

export default SearchResultList;