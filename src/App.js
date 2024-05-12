import React, { Component } from 'react';
import Main from './components/Main';
import Aside from './components/Aside';
import Header from './components/Header';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        label: 'Марк Цукенберг продемонстрировал работу VR-гарнитуры Project Cambria',
        category: 'Технологии',
        author: 'Иван Иванов',
        content: `Глава Meta Марк Цукерберг опубликовал в Facebook видео работы VR-гарнитуры нового \n 
        поколения, поддерживающей приложения виртуальной и дополненной реальности. На
        этапе разработки устройство носит название Project Cambria, а его выход может состояться
        уже в этом году.`
      },
    ],
    archive: [],
  };

  addPost = (post) => {
    this.setState(prevState => ({
      posts: [...prevState.posts, post]
    }));
  };

  handleDelete = (id) => {
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id !== id)
    }));
  };
  
  handleArchive = (id) => {
    this.setState(prevState => ({
      posts: prevState.posts.filter(post => post.id !== id),
      archive: [...prevState.archive, prevState.posts.find(post => post.id === id)]
    }));
  }
  render (){
    return(
      <div className='osnova'>
        <Header title="Блог" />
        <div className="content-area">
          <main>
          <Main 
            posts={this.state.posts} 
            onDelete={this.handleDelete} 
            onArchive={this.handleArchive} />
          </main>
          <Aside addPost={this.addPost} archive={this.state.archive} />
        </div>
      </div>)
  }
}
export default App;
