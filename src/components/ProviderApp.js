import React, {useContext, useState } from 'react';
import {ArticlesContext} from '../providers/articlesProvider';
import {SearchContext} from '../providers/searchProvider';


const App = () => {
    const { searchState, searchDispatch } = useContext(SearchContext);
    const { articlesDispatch } = useContext(ArticlesContext);

    const onSearch = searchTerm => {
        searchDispatch({ type: 'SEARCH_SET', searchTerm });
        articlesDispatch({ type: 'FILTER', payload: searchTerm})
    }
    return (
      <div>
        <Search value={searchState.searchTerm} onSearch={onSearch}>
            <p>Search using Provider</p>
        </Search>
        <p>search value: {searchState.searchTerm}</p>
        <Articles />
      </div>
    )
}

const Search = ({ value, onSearch, children }) =>
  <div>
    {children} <input
      value={value}
      onChange={event => onSearch(event.target.value)}
      type="text"
    />
  </div>


const Articles = () =>{
    const { articlesState } = useContext(ArticlesContext);
    return (
        <ul>
            {articlesState.articles.map(article =>
            <li key={article.id}>
                <a href="https://www.google.com">{article.title}</a>
            </li>
            )}
        </ul>
    )
}
    
export default App;