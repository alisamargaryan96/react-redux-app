import React from 'react';

class Users extends React.Component{
  
    render () {
        return (
            <div>
                <h1>{console.log(this.props.users)}</h1>
            </div>
        )
    }
}

export default Users;