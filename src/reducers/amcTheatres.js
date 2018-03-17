
const intialState = {
   currentlyShowing: [],
   comingSoon: []
}
export default function amcTheatres(state = intialState, action) {
    switch (action.type) {
        case 'FETCH_NOW_SHOWING_LOAD':
            return Object.assign({}, state, {currentlyShowing: action.movies});
        case 'FETCH_COMING_SOON_LOAD':
        return Object.assign({}, state, {comingSoon: action.movies});
        default:
            return state;
    }
}