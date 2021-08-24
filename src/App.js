import React, { useState, useRef, useMemo } from "react";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import './styles/App.css';
import MyButton from './components/UI/button/MyButton';
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {

  // хуки 
  const [posts, setPosts] = useState([
    { id: 1, title: 'Js', body: 'Description3' },
    { id: 2, title: 'Js2', body: 'Description2' },
    { id: 3, title: 'Js3', body: 'Description1' },
  ])


  const [likes, setLikes] = useState(0),
    [value, setValue] = useState('текст');

  const [searchQuery, setSearchQuery] = useState('');

  const [selectedSort, setSelectedSort] = useState('');

  const sortedPosts = useMemo(() => {
    console.log('отработанна функция сортировки');
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }

    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [searchQuery, sortedPosts]);

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

  const sortPosts = (sort) => {
    setSelectedSort(sort);

  }

  return (
    <div className="App">
      <Counter />

      <PostForm create={createPost} />

      <hr style={{ margin: '15px 0' }} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="поиск..."
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка по"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
          ]}
        />
      </div>

      {sortedAndSearchedPosts.length !== 0
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постовJS' />
        : <h2 style={{ textAlign: 'center' }}>Посты не найдены!</h2>
      }

    </div>
  );
}

export default App;
