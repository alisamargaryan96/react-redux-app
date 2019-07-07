
export const GET_USER = "GET_USER";

export default function  getUsers(userResult){
    return {
       type : GET_USER,
       payload : userResult
    }
}