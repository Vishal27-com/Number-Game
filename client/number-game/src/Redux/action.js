import axios from 'axios'
import { ERROR_ACTION, GET_LEADERBOARD, LOADING_ACTION } from './type'
// const BASE_URL='https://number-game-d4ns.onrender.com'
const BASE_URL='http://localhost:3000'
export const postResult=async(data)=>{
try {
    await axios.post(`${BASE_URL}/users`,data)
} catch (error) {
    console.log(error.message)
}
}
export const getLeaderboard=()=>async(dispatch)=>{
    try {
        dispatch({type:LOADING_ACTION})
        let res=await axios.get(`${BASE_URL}/users?_sort=score&_order=desc`)
        dispatch({type:GET_LEADERBOARD,payload:res.data})
    } catch (error) {
        dispatch({type:ERROR_ACTION})
    }
}