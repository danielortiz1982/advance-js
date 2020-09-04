import React, {Component} from 'react';
import Users from './Components/Usres'
import Posts from './Components/Posts';
import './App.css';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      users: [],
      posts: []
    }
  }
  
  async componentDidMount(){

    const postsData = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await postsData.json()

    const usersData = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await usersData.json()

    this.setState({users, posts})

  }

  render(){
    return (
      <div className="App">
        <Users data={this.state.users} />
        <Posts data={this.state.posts} />
      </div>
    )
  }
}

export default App