import React, {Component} from 'react';

class Posts extends Component{
    render(){
        return (
            <div className="posts">
                <h1>Post</h1>
                {this.props.data.map( el => (
                    <div className="post" key={el.id}>
                        <h2>{el.title}</h2>
                        <p>Post ID: {el.id}</p>
                        <p>{el.body}</p>
                    </div>
                ))}
            </div>
        )
    }
}
export default Posts