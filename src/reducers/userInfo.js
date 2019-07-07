import GET_USER from '../actions/getUsers';

const initialState = {
    userResult:[],
}
export default function userInfo(state = initialState, action){
    switch(action.type){
        case "GET_USER":
         return {
             ...state,
             userResult:action.payload
         }
        
         default: 
             return state;
         
    }
}
export const getUsersInfo = state => state.userResult;