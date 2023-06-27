import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, redirect, Link, useParams, json } from 'react-router-dom';
import { PostList } from './pages/PostList';
import NewPost from './pages/NewPost';
import ViewPost from './pages/ViewPost';
import EditPost from './pages/EditPost';

function App() {
    const [posts, setPosts] = useState([]);
    const [userContent, setUserContent] = useState('');
    const [updated, setUpdated] = useState(false);
    const [error, SetError] = useState({
        name: '',
        message: ''
    })

    useEffect(() => {
        fetch("http://localhost:7777/posts")
            .then((response) => {
                console.log(response.statusText);
                return response.json()
            })
            .then((posts) => {
                console.log("from App posts=", posts);
                setPosts(posts)
            })
            .catch(e => {
                console.log("error:", e)
                SetError(e)
            });
    }, []);

    // useEffect(() => { if (posts.length) {
    //     console.log("posts=",posts);
    // }}, [posts]);

    useEffect(() => {
        fetch("http://localhost:7777/posts")
            .then((response) => {
                console.log(response.statusText);
                return response.json()
            })
            .then((posts) => {
                console.log("from App posts=", posts);
                setPosts(posts)
            }) 
            .catch(e => {
                console.log("error:", e)
                SetError(e)
            });
    // }, [updated]);
    }, [userContent]);

    console.log("posts=", posts);

    const HandleChainge = (event) => {
        console.log(event.target.value);
        return (            
            setUserContent(event.target.value)
        )
    }

    const HandleSave = () => {
        // const url = '/posts';
        // const method = 'POST';
        // const body = {
        //   id: 0,
        //   content: userContent
        // }
        // Fetch(url, method, body)

        fetch('http://localhost:7777/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: userContent })
        })
        // setUpdated(true);
        // setUpdated(prevUpdated=>!prevUpdated);
        setUserContent('')
    }

    const HandleUpdate = () => {
        fetch('http://localhost:7777/posts/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: userContent })
    })
}

    return (
        // null
        // <PostList posts={posts} />
        <Routes>
            <Route path='/' element={<PostList posts={posts} />} />
            {/* <Route index element={<PostList posts={posts} />} /> */}
            <Route path='/NewPost' element={
                <NewPost onChange={HandleChainge} 
                    userContent={userContent}                    
                    onClickSave={HandleSave} />
            } />
            <Route path='/ViewPost' element={
                 <ViewPost posts={posts} userContent={userContent}/>} />
            <Route path='/EditPost' element={
                 <EditPost onChange={HandleChainge} onClickSave={HandleSave}/>}/>
            {/* <Route path='*' element={<NoExist />} /> */}
        </Routes>
    );
}

export default App;