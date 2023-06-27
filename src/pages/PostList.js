import React from "react";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Post from "../components/Post";


export default function PostList() {    
    const [posts, setPosts] = useState([]);
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
            .then((data) => {
                console.log("from App data=", data);
                setPosts(data)
            })
            .catch(e => {
                console.log("error:", e)
                SetError(e)
            });
    }, []);

    // useEffect(() => {
    //     fetch("http://localhost:7777/posts")
    //         .then((response) => {
    //             console.log(response.statusText);
    //             return response.json()
    //         })
    //         .then((posts) => {
    //             console.log("from App posts=", posts);
    //             setPosts(posts)
    //         })
    //         .catch(e => {
    //             console.log("error:", e)
    //             SetError(e)
    //         });
    // }, [userContent]);




    if (posts.length === 0) {
        return (
            <div className="all">
                <div className="forSave">
                    {/* <button className='button' onClick={() => navigate("NewPost")}>Создать пост</button> */}
                    <Link to='newpost'>
                        <button className='button'>Создать пост</button>
                    </Link>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="all">
                <div className="forSave">
                    {/* <button className='button' onClick={() => navigate("NewPost")}>Создать пост</button> */}
                    <Link to='newpost'>
                        <button className='button'>Создать пост</button>
                    </Link>
                </div>
                <ul className='postList'>
                    {
                        posts.map((post) => {                            
                            return (
                                // <Link key={post.id} to={`${post.id}`}>
                                //     <li>
                                //         <Post post={post} />
                                //     </li>
                                // </Link>
                                <li style={{marginTop: '.3em'}} key={post.id}>
                                    <Link to={`${post.id}`} state={{viewPost:post}}>
                                    {/* <Link to={"/posts/"+post.id}> */}
                                        <Post post={post} />
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}