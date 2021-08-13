import React, { useState, useRef } from "react";
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

  const [post, setPost] = useState({ title: '', body: '' });
  // [body, setBody] = useState('');

  // const bodyInputRef = useRef();

  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  const addNewPost = (e) => {
    e.preventDefault();

    // console.log(bodyInputRef.current.value);
    // const newPost = {
    //   id: Date.now(),
    //   title,
    //   body
    // }

    setPosts([...posts, { ...post, id: Date.now() }]);

    setPost({ title: '', body: '' });
    // setTitle('');
    // setBody('');
  }

  return (
    <div className="App">
      <Counter />
      {/* управляемый компонент */}

      <form>
        <MyInput
          value={post.title}
          onChange={e => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста" />

        {/* не рекомендуется в реакт ползать по дом дереву на прямую */}
        {/* <input ref={bodyInputRef} type="text" /> */}

        {/* Неуправляемы / Неконтролируемы компонент*/}
        <MyInput
          value={post.body}
          onChange={e => setPost({ ...post, body: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />

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
