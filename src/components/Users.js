import React from 'react';

class Users extends React.Component{
  
    render () {
        return (
            <div>
                <h1>{this.props.userResult}</h1>
            </div>
        )
    }
}

export default Users;