import React, { useState } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';
import MyInput from "./components/UI/input/MyInput";


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Js', body: 'Description' },
    { id: 2, title: 'Js2', body: 'Description' },
    { id: 3, title: 'Js3', body: 'Description' },
  ])


  const [likes, setLikes] = useState(0),
    [value, setValue] = useState('текст');

  const [title, setTitle] = useState('');

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
  }

  return (
    <div className="App">
      <Counter />
      {/* управляемый компонент */}

      <form>
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста" />
        <MyInput type="text" placeholder="Описание поста" />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>

      <PostList posts={posts} title='Список постовJS' />

      {/* <PostItem post={} /> */}

      {/* <h2>{value}</h2>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      /> */}

    </div>
  );
}

export default App;
