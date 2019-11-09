export default function jeanReducer(state={jeans:[]}, action){
    switch(action.type){

        case 'FETCH_JEANS':
            return {...state, jeans: action.payload.jeans}

        default:
            return state;
    }
}