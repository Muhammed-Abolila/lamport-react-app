import { MOVIEBYID } from "../Types/type";

export const movieByIdReducer=(state={movie:[]},action)=>{
    switch(action.type){
        case MOVIEBYID:
            return{movie:action.data};
        default:
            return state
    }
}