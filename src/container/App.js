import React from 'react';
import './App.css';
import Users from '../components/Users';
import { bindActionCreators } from 'redux';
import getUsersInfo from '../reducers/userInfo';
import fetchUsers from '../generalFunctions/fetchUsers';
import {connect} from 'react-redux';


class App extends React.Component{

  componentWillMount (){
    const {getUsers} = this.props;
    getUsers();
  }
  render () {
    const {userResult} = this.props;
    return (
      <div>
          <Users users={userResult}/>
      </div>
    )
  }
}

function mapStateToProps(state){
   return {
    userResult:state.userInfo.userResult
   }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    getUsers: fetchUsers
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App);
