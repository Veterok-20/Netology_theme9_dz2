import React from 'react';
import { Link, userContent, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReactComponent as Pencil } from "../icons/pencil.svg";
import { ReactComponent as Photo } from "../icons/photo.svg";
import { ReactComponent as Camera } from "../icons/camera.svg";
import { ReactComponent as Threedots } from "../icons/threedots.svg";

export default function NewPost(props) {
    const [userContent, setUserContent] = useState('');

    const HandleChainge = (event) => {
        console.log(event.target.value);
        return (
            setUserContent(event.target.value)
        )
    }

    const HandleSave = () => {

        fetch('http://localhost:7777/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: userContent })
        })

        setUserContent('')
    }

    return (
        <>
            {/* <input type='text' onChange={(e) => HandleChainge(e)}
                value={userContent} />
            <Link to="/posts" >
                <button onClick={HandleSave}>Save</button>
            </Link> */}
            <div style={{ width: "75%", border: "5px solid black" }} >
                <nav className='forNav'>
                    <div className='iconDescribe' style={{ border: "none", backgroundColor: "white" }}>
                        <Pencil />
                        <div className='iconText'>Публикация</div>
                    </div> <div style={{ color: "gainsboro" }}>|</div>

                    <div className='iconDescribe' style={{ border: "none", backgroundColor: "white" }}>
                        <Photo />
                        <div className='iconText'>Фото/видео</div>
                    </div> <div style={{ color: "gainsboro" }}>|</div>

                    <div className='iconDescribe' style={{ border: "none", backgroundColor: "white" }}>
                        <Camera />
                        <div className='iconText'>Прямой эфир</div>
                    </div> <div style={{ color: "gainsboro" }}>|</div>

                    <div className='iconDescribe' style={{ border: "none", backgroundColor: "white" }}>
                        <Threedots />
                        <div className='iconText'>Ещё</div>
                    </div>
                    <Link to="/posts" >
                        <button className="buttonX" style={{ backgroundColor: "white" }}>x</button>
                    </Link>
                </nav >
                <hr className='line' style={{ borderTop: ".5px solid  gainsboro" }} />
                <div className="header" style={{ fontSize: "medium", height: "4em" }} >
                    <div className='avatar' style={{ backgroundColor: "white", border: ".1rem solid gainsboro" }}></div>
                    <input className="inputStyle" type='text' onChange={(e) => HandleChainge(e)}
                        value={userContent} />
                </div>
                <div className='forSave' style={{ backgroundColor: "gainsboro" }}>
                    <Link to="/posts" >
                        <button className="button" style={{ top: "7px" }} onClick={HandleSave}>Сохранить</button>
                    </Link>
                </div>
            </div>
        </>)

} 