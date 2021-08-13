import React, { useState, useRef } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'Js', body: 'Description' },
    { id: 2, title: 'Js2', body: 'Description' },
    { id: 3, title: 'Js3', body: 'Description' },
  ])


  const [likes, setLikes] = useState(0),
    [value, setValue] = useState('текст');


  // [body, setBody] = useState('');

  // const bodyInputRef = useRef();

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }

  // удаление поста
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <Counter />

      <PostForm create={createPost} />

      {posts.length !== 0
        ? <PostList remove={removePost} posts={posts} title='Список постовJS' />
        : <h2 style={{ textAlign: 'center' }}>Посты не найдены!</h2>
      }

    </div>
  );
}

export default App;
