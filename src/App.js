import React from 'react';
import './App.css';
import { Routes, Route, redirect } from 'react-router-dom';
import PostList from './pages/PostList';
import NewPost from './pages/NewPost';
import ViewPost from './pages/ViewPost';
import EditPost from './pages/EditPost';
import { ReactSVG } from "react-svg";
import { HandySvg } from 'handy-svg';

import { ReactComponent as ThreeDots } from "./icons/threedots.svg";
import { ReactComponent as Founder } from "./icons/founder.svg";
import { ReactComponent as VisitNo } from "./icons/visit-no.svg";
import { ReactComponent as Emoji } from "./icons/emoji.svg";


function App() {

  return (
    <>
    <Routes>      
      <Route path="/posts">
          <Route index element={<PostList />} />
          <Route path='newpost' element={<NewPost />} />          
          <Route path=':id' element={<ViewPost />} />
          <Route path=':id/edit' element={<EditPost />} />          
      </Route>
          {/* <Route path='*' element={<NoExist />} />        */}
    </Routes> 
    </>
  );
}

export default App;