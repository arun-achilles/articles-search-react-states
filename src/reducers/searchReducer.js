export const searchInitialState = {
  searchTerm: '',
};

export function searchReducer(state = searchInitialState, action) {
  switch (action.type) {
    case 'SEARCH_SET':
      return { ...state, searchTerm: action.searchTerm };
    default: return state;
  }
}

