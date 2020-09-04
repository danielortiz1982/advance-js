import React, {Component} from 'react';

class Users extends Component{
    render(){
        return (
            <div className="users">
                <h1>Users</h1>
                {this.props.data.map(el => (
                    <div className="user" key={el.id}>
                        <h2>Name: {el.name}</h2>
                        <p>Username: {el.username}</p>
                        <p>Email: {el.email}</p>
                        <p>Address: {el.address.street}, {el.address.city} {el.address.zipcode}</p>
                    </div>
                ))}
            </div>
        )
    }
}

export default Users