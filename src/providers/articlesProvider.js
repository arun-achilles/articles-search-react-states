import React, { createContext, useReducer, useEffect } from 'react';
import {articleReducer, articleIntialState} from '../reducers/articleReducer';


export const ArticlesContext = createContext(null);


const ArticlesContextProvider = (props) => {
    const [state, dispatch] = useReducer(articleReducer, articleIntialState);

    return (
        <ArticlesContext.Provider value={{ articlesState: state, articlesDispatch: dispatch }}>
          {' '}
          {props.children}
        </ArticlesContext.Provider>
      );
}

export default ArticlesContextProvider;
