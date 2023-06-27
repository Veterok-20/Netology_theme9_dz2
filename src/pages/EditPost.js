import React from 'react';
import { useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ReactComponent as Image } from "../icons/image.svg";
import { ReactComponent as Emoji } from "../icons/emoji.svg";
import { ReactComponent as Person } from "../icons/person-check.svg";
import { ReactComponent as Visit } from "../icons/visit-no.svg";
import { ReactComponent as Flower } from "../icons/flower.svg";



export default function EditPost() {
    const location = useLocation();
    const navigate = useNavigate();
    const { editPost } = location.state;   
    // const [editContent, setEditContent] = useState(location.state?.editPost.content)                
    const [editContent, setEditContent] = useState(editPost.content);
    // const { state: { userContent } = {} } = useLocation();    
    // const editContent = location.state?.editContent;
    // console.log(JSON.stringify({ ...editPost, content: editContent }))

    const HandleChainge = (event) => {
        console.log(event.target.value);
        return (
            setEditContent(event.target.value)
        )
    }

    const HandleSave = () => {
            fetch(`http://localhost:7777/posts/${editPost.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...editPost, content: editContent })
            })
            editPost.content = editContent;
            setEditContent('');
        // navigate(`/posts/${editPost.id}`);

    }

    const HandleX = () => {
        navigate(-1);
    }

    return (
        <>

            {/* <input type='text' onChange={(e) => HandleChainge(e)}
                value={editContent} />
            <Link to={`/posts/${editPost.id}`} state={{viewPost:editPost}}>
                <button onClick={HandleSave}>Save</button>
            </Link>
            <button onClick={HandleX}>X</button> */}

            <div className='all'>
                <div className="forSave2">
                    {/* <button className='buttonEditPost'>Редактироать публикацию</button> */}
                    <div style={{fontWeight: 700, fontSize: 'samller'}}>Редактироать публикацию</div>
                    <button className="buttonX" onClick={HandleX}>x</button>
                </div>

                <div className="header" style={{ fontSize: "medium", height: "4em" }} >
                    <div className='avatar' style={{ marginLeft: "4px", marginTop: "1em" }}></div>
                    <input className="inputStyle" type='text' onChange={(e) => HandleChainge(e)}
                        value={editContent} />
                </div>
                <hr className='line' style={{ borderTop: ".2px solid gainsboro" }} />
                <div className='iconsBlock'>
                    <div className='iconDescribe' style={{width: '47%'}}>
                        <Image />
                        <div style={{ marginLeft: ".3em", fontSize: "small", fontWeight: "700" }}>Нравится</div>
                    </div>
                    <div className='iconDescribe' style={{width: '47%'}}>
                        <Person />
                        <div style={{ marginLeft: ".3em", fontSize: "small", fontWeight: "700" }}>Отметить друзей</div>
                    </div>
                    <div className='iconDescribe' style={{width: '47%'}}>
                        <Emoji />
                        <div style={{ marginLeft: ".3em", fontSize: "small", fontWeight: "700" }}>Чувства/действия</div>
                    </div>
                    <div className='iconDescribe' style={{width: '47%'}}>
                        <Visit />
                        <div style={{ marginLeft: ".3em", fontSize: "small", fontWeight: "700" }}>Отметить посещение</div>
                    </div>
                    <div className='iconDescribe' style={{width: '47%'}}>
                        <Flower />
                        <div style={{ marginLeft: ".3em", fontSize: "small", fontWeight: "700" }}>GIF</div>
                    </div>
                </div>
                <div className='forSave' style={{ backgroundColor: "gainsboro", height: "2em", marginTop: ".2rem" }}>
                    <Link to={`/posts/${editPost.id}`} state={{ viewPost: editPost }}>
                    <button className="button" style={{ top: "7px" }} onClick={HandleSave}>Сохранить</button>
                    </Link>
                </div>

            </div>
        </>
    )
}