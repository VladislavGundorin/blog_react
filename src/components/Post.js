import React from 'react';

class Post extends React.Component {
  handleDelete = () => {
    this.props.onDelete(this.props.id);
  }

  handleArchive = () => {
    this.props.onArchive(this.props.id);
  }

  render() {
    return (
      <article className="post">
        <h1>{this.props.label}</h1>
        <label>Категория: </label><strong>{this.props.category}</strong>
        <p><label>Автор: </label><strong>{this.props.author}</strong></p>
        <p>{this.props.content}</p>
        <button className="archive"onClick={this.handleArchive}>Архив</button>
        <button className="delete"onClick={this.handleDelete}>Удалить</button>
      </article>
    );
  }
}

export default Post;
