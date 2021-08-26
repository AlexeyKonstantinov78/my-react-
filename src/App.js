import React, { useState, useMemo } from "react";
import Counter from "./components/Counter";
import PostList from "./components/PostList";
import './styles/App.css';
import PostForm from "./components/PostForm";
import PostFiltr from "./components/PostFiltr";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";


function App() {

  // хуки 
  const [posts, setPosts] = useState([
    { id: 1, title: 'Js', body: 'Description3' },
    { id: 2, title: 'Js2', body: 'Description2' },
    { id: 3, title: 'Js3', body: 'Description1' },
  ])


  const [likes, setLikes] = useState(0),
    [value, setValue] = useState('текст');

  const [filter, setFilter] = useState({ sort: '', query: '' });


  const sortedPosts = useMemo(() => {
    console.log('отработанна функция сортировки');
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }

    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

  const [modal, setModal] = useState(false);

  // функции 
  function increment() {
    setLikes(likes + 1);
  }

  function decrement() {
    setLikes(likes - 1);
  }

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  // удаление поста
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <Counter />

      <MyButton
        style={{ marginTop: '30px' }}
        onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <hr style={{ margin: '15px 0' }} />
      <PostFiltr
        filter={filter}
        setFilter={setFilter} />

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постовJS' />

    </div>
  );
}

export default App;
