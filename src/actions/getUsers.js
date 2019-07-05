

export default function  getUsers(userResult){
    return {
       type:"GET_USERS",
       payload: userResult
    }
}