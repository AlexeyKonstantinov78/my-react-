import React, { useState } from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from "./UI/input/MyInput";

const PostForms = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();

        // console.log(bodyInputRef.current.value);
        // const newPost = {
        //   id: Date.now(),
        //   title,
        //   body
        // }

        // setPosts([...posts, { ...post, id: Date.now() }]);

        const newPost = {
            ...post, id: Date.now()
        }

        create(newPost);
        setPost({ title: '', body: '' });
        // setTitle('');
        // setBody('');
    }

    return (
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
    )
}

export default PostForms;