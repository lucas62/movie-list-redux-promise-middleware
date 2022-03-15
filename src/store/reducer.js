import { ActionType } from 'redux-promise-middleware';

const initialState = {
    data: [],
    pedding: true,
    error: undefined,
    currentPage: 0,
    totalNumberPage: 0,
    loadingMoreData: false
}

const MOVIE_LIST_PENDING = `MOVIE_LIST_${ActionType.Pending}`;
const MOVIE_LIST_FULFILLED = `MOVIE_LIST_${ActionType.Fulfilled}`;
const MOVIE_LIST_REJECTED = `MOVIE_LIST_${ActionType.Rejected}`;

const movieReducer = (state = initialState, action) => {
    switch(action.type) {
        case MOVIE_LIST_PENDING:
          return {...state, loadingMoreData: false, pedding: true};
    
        case MOVIE_LIST_FULFILLED:
          let auxData = []

          if (Number(action.payload.headers['x-pagination-page']) === 1) {
            auxData = action.payload.data
          } else {
            auxData = [...state.data, ...action.payload.data]
          }

          return {
            pedding: false,
            isFulfilled: true,
            currentPage: action.payload.headers['x-pagination-page'],
            totalNumberPage: action.payload.headers['x-pagination-page-count'],
            data: auxData,
            loadingMoreData: false
          };
    
        case MOVIE_LIST_REJECTED:
          return {
            pedding: false,
            loadingMoreData: false,
            isRejected: true,
            error: action.payload
          };
        
        case 'LOAD_MORE_MOVIES':
          return {
            ...state,
            loadingMoreData: true
          };
    
        default: return state;
    }
};

export default movieReducer;