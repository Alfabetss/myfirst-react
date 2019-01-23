import axios from 'axios';


const initialState = {
    list_movie: [],
    user_name: 'Alfabet Setiawan',
    user_balance: 100000,
    khusus: 'dari reducer coy'
}

const reducer = (state = initialState, action) => {
    if (action.type == 'userBalanceHandler') {
        return {
            ...state,
            user_balance: state.user_balance - action.price
        }
    }
    if (action.type == 'movieListHandler') {
        return {
            ...state,
            list_movie: state.list_movie.concat(action.data)
        }
    }
    return state
}

export default reducer