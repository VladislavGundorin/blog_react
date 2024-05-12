import React, { Component } from 'react';
import './Css/Main.css'

class Aside extends Component {
  state = {
    label: '',
    category: '',
    author: '',
    content: ''
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      author: this.state.author,
      label: this.state.label,
      category: this.state.category,
      content: this.state.content
    };
    this.props.addPost(newPost);
    this.setState({
      author: '',
      label: '',
      category: '',
      content: ''
    });
  };

  render() {
    return (
      <aside className="aside">
        <h1>Создать запись</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Автор
            <input type="text" name="author" onChange={this.handleChange} />
          </label>
          <label>
            Заголовок
            <input type="text" name="label" onChange={this.handleChange} />
          </label>
          <label>
            Категория
            <input type="text" name="category" onChange={this.handleChange} />
          </label>
          <label>
            Содержание
            <textarea name="content" onChange={this.handleChange} />
          </label>
          <button type="submit">Создать</button>
        </form>
        <h1>Архив</h1>
        <ul>
          {this.props.archive.map((post, index) => (
            <li>
              <p>{post.label}</p>
              </li>
          ))}
        </ul>
      </aside>
    );
  }
}

export default Aside;