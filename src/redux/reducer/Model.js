import {OPEN_MODEL, CLOSE_MODEL} from '../actions/Model';
const  initialState={
    isOpen: false
}
export function generalModal(state = initialState, action){
    switch(action.type){
        case OPEN_MODEL:
            return{
                ...state,
                isOpen: true
            }
        case CLOSE_MODEL:
            return{
                ...state,
                isOpen:false
            }
        default:
            return state;
    }
}