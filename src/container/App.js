import React from 'react';
import './App.css';
import Users from '../components/Users';
import getUser from '../actions/getUsers';
import {connect} from 'react-redux';


class App extends React.Component{
 
  render () {
    return (
      <div>
          <Users users={this.props.userResult}/>
      </div>
    )
  }
}

function mapStateToProps(state){
   return {
    userResult:state.userInfo.userResult
   }
}
function mapDispatchToProps(dispatch){
    return {
      getUser: userResult =>{
        dispatch(getUser(userResult))
      }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
