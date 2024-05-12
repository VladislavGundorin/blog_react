import React from "react"
import Post from '../PostComp/Post';
import './Main.css'

class Main extends React.Component {
    render() {
      return (
        <div className="post-list">
          <h2>Записи</h2>
          {this.props.posts.map(post => (
            <Post 
              key={post.id} 
              onDelete={this.props.onDelete} 
              onArchive={this.props.onArchive} 
              {...post} 
            />
          ))}
        </div>
      );
    }
  }
  
export default Main