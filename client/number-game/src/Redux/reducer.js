import { ADD_RESULT, ADD_USER, ERROR_ACTION, GET_LEADERBOARD, LOADING_ACTION } from "./type"

const initState={
    loading:false,
    error:false,
    user:{},
    leaderboard:[]
}
export const reducer=(state=initState,{type,payload})=>{
    switch (type) {
        case LOADING_ACTION:{
            return {
                ...state,
                loading:true,
                error:false
            }
        }
        case ERROR_ACTION:{
            return {
                ...state,
                loading:false,
                error:true
            }
        }
        case ADD_USER:{
            return{
                ...state,
                user:payload,
                loading:false,
                error:false
            }
        }
        case ADD_RESULT:{
            return{
                ...state,
                user:{...state.user,score:payload},
                loading:false,
                error:false
            }
        }
        case GET_LEADERBOARD:{
            return{
                ...state,
               leaderboard:payload,
               loading:false,
               error:false
            }
        }
        default: return state
    }
}