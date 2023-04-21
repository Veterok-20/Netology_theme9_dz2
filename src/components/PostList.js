import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import Post from "./Post";
import NewPost from "../pages/NewPost";


export function PostList(props) {
    const { posts } = props;
    const navigate = useNavigate();

    if (posts.length = 0) { 
        return (
            <div className="all">
            <div className="forSave">
                        {/* <button className='button' onClick={() => navigate("NewPost")}>Создать пост</button> */}
                        <Link to='/NewPost'>
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
                        <Link to='/NewPost'>
                        <button className='button'>Создать пост</button>
                        </Link>
                    </div>
                    <ul className='postList'>
                        {
                            posts.map((obj) => {
                                return <li key={obj.id}>
                                    <Post post={obj} />
                                </li>
                            })

                        }
                    </ul>
                </div>             
        )
    }
}