import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { ReactComponent as Hand } from "../icons/hand.svg";
import { ReactComponent as Comment } from "../icons/comment.svg";
import { ReactComponent as Founder} from "../icons/founder.svg";

export default function ViewPost(props) {

    const { id } = useParams();
    const location = useLocation();
    const { viewPost } = location.state;
    const [vpost, setVpost] = useState({});
    const username = 'Гаврила';
    const surname = 'Говорухин';
    const userstatus = 'Основатель группы';

    // useEffect(() => {
    //     // fetch("http://localhost:7777/posts/" + id)
    //     fetch(`http://localhost:7777/posts/${id}`)
    //         .then((response) => {
    //             return response.json()
    //         })
    //         .then((data) => {
    //             setViewPost(data)
    //         })
    //         .catch(e => {
    //             console.log("error:", e)
    //         });
    // }, []);

    useEffect(() => {
        setVpost(viewPost)
    }, [viewPost])

    const HandleDelete = () => {
        fetch(`http://localhost:7777/posts/${viewPost.id}`, {
            method: 'DELETE'
        })
    }

    return (
        <div className='all' style={{ backgroundColor: 'gainsboro' }}>          
             <div className="header">
                <div className='avatar'style={{width: '20'}}></div>
                <div className='userdata'>
                    <div style={{color: 'rgb(10,40,172)'}}>{username + ' ' + surname}</div>
                    <div className='userstatus'>
                        <Founder style={{width: '16'}}/>
                        <div className='userstatusdata'>{userstatus}</div>
                        {/* <div className='data'>{data}</div> */}
                    </div>
                </div>
            </div>
            <div className='content'>{vpost.content}</div>
            <hr className='line' />
            <div className='emotions'>
                <div className='iconDescribe' style={{backgroundColor: 'white'}}>                    
                        <Hand className="icons"/>
                        <div className='iconText' style={{backgroundColor: 'white', fontWeight: '400'}}>Нравится</div>                   
                </div>
                <div className='iconDescribe' style={{backgroundColor: 'white', fontWeight: '400'}}>                   
                        <Comment className="icons"/>
                        <div className='iconText' style={{backgroundColor: 'white', fontWeight: '400'}}>Комментировать</div>                   
                </div>
            </div>
            <hr className='line' />
            <div className='forSave' >
                <Link to="edit" state={{ editPost: viewPost }}>
                    <button className="button" style={{ top: "7px" }}>Изменить</button>
                </Link>
                <Link to={`/posts`}>
                    <button className="button" style={{ backgroundColor: "red" }} onClick={HandleDelete}>Удалить</button>
                </Link>
                <Link to={`/posts`}>
                    <button className="button" style={{ top: "7px" }}>На главную</button>
                </Link>
            </div>
           
        </div>
    )
}


