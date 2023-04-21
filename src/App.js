import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route, redirect, Link, useParams, json } from 'react-router-dom';
import { PostList } from './components/PostList';
import NewPost from './pages/NewPost';
import NoExist from './pages/NoExist';


function App() {
  const [posts, SetPosts] = useState([]);
  const [userContent, SetUserContent] = useState('');
  const [error, SetError] = useState({
    name: '',
    message: ''
  })

  const Fetch = (url, method = 'GET', body) => {
    async function FetchPosts() {
      if (!body) {
        try {
          // const response =  await fetch(url);          
          // if (!response.ok) { throw new Error(response.statusText) }  
          // return await response.text();                 
          // const posts = await response.text();
          // console.log("posts=", posts)
          // let posts1 = Transform(posts);
          // console.log(response)
          fetch(url)
            .then((response) => response.text())
            .then((res) => {
              let objarr = Transform(res);
              SetPosts(objarr);
            })
          // SetPosts(posts1);
        }
        catch (e) {
          console.log("error:", e)
          SetError(e)
        };
      }
      else {
        try {
          const response = await fetch(url, {
            method: method,
            body: JSON.stringify(body)
          });
          if (!response.ok) { throw new Error(response.statusText) }
        }
        catch (e) {
          console.log("error:", e)
          SetError(e)
        };
      }
    };
    FetchPosts();
  }

  const Transform = (str) => {
    console.log("str=", str);
    let str1 = str.replace(/\"\d+\"|\"{\"|\"}\"/g, '');
    let str2 = str1.replace(/\"+|\,|\\|\:|\s/g, '');
    let str3 = str2.replace(/\{idcontent/g, "\{\"content\":\"");
    let str4 = str3.replace(/id/g, "\",\"id\"\:");
    let str5 = str4.replace(/created/g, ",\"created\":");
    let jsonobj = str5.replace(/}{/g, "}" + "," + "{");     
    console.log('str6=', jsonobj);    
    
    let objarray = JSON.parse(jsonobj);
    console.log('objarray=', objarray);
    return objarray;

  }

  const HandleChainge = (event) => {
    return (
      SetUserContent(event.target.value)
    )
  }

  const HandleSave = () => {
    const url = '/posts';
    const method = 'POST';
    const body = {
      id: 0,
      content: userContent
    }
    Fetch(url, method, body)
  }

  const HandleClose = () => {
  }

  useEffect(() => {
    const url = 'http://localhost:7777/posts';
    Fetch(url);
    // Fetch('http://localhost:7777/posts/:1', 'DELETE')

  }, [])


  return (
    <Routes>
      <Route path='/' element={<PostList posts={posts} />} />
      {/* <Route index element={<PostList posts={posts} />} /> */}
      <Route path='/NewPost' element={
        <NewPost onChange={HandleChainge} userContent={userContent}
          onClickSave={HandleSave} />
      } />

      {/* <Route path="*" element={<NoExist />} /> */}
    </Routes>
  );
}

export default App;
