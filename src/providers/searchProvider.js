import React, { createContext, useReducer, useEffect } from 'react';
import {searchInitialState, searchReducer} from '../reducers/searchReducer';


export const SearchContext = createContext(null);


const SearchContextProvider = (props) => {
    const [state, dispatch] = useReducer(searchReducer, searchInitialState);

    return (
        <SearchContext.Provider value={{ searchState: state, searchDispatch: dispatch }}>
          {' '}
          {props.children}
        </SearchContext.Provider>
      );
}

export default SearchContextProvider;
