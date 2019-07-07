import getUsers from '../actions/getUsers';

export default  function fetchUsers(){
   
    return dispatch => {
        fetch("https://randomuser.me/api/?results=50")
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
             console.log(res.results);
            
            dispatch(getUsers(res.results));
            return res.results;
        })
        .catch(error => {
           console.log(error);
        })
    }   
}
