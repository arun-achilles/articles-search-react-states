const articlesList = [
  { id: '0', title: 'Travel for a week in Europe'},
  { id: '1', title: 'A day in the western'},
  { id: '2', title: 'Blockbuster movies of the month'},
  { id: '3', title: '8 things to learn in life'},
  { id: '4', title: 'Economic slowdown and its effects'},
  { id: '5', title: 'Tips to learn the art of DIY'},
  { id: '6', title: '10 Reasons why I moved to Canada'},
  { id: '7', title: 'Facts about Dogs'},
  { id: '8', title: 'Rebound happiness'},
  { id: '9', title: 'Tips to learn patience'},
  { id: '10', title: 'A gentle Introduction to Life science'},
  { id: '11', title: 'Complete Meal Course diet plan'},
]
export const articleIntialState = {
  articles: articlesList
};

export function articleReducer(state = articleIntialState, action) {
  switch (action.type) {
    case 'FILTER':
      return {...state , articles: articlesList.filter(article => article.title.toLowerCase().includes(action.payload.toLowerCase()))}
    default: return state;
  }
}

