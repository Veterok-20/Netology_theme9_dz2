import React from 'react';
import { ReactComponent as Founder} from "../icons/founder.svg";
import { ReactComponent as Hand} from "../icons/hand.svg";
import { ReactComponent as Comment} from "../icons/comment.svg";
import { ReactComponent as Emoji} from "../icons/emoji.svg";
import { ReactComponent as Photo} from "../icons/photo.svg";
import { ReactComponent as Flower} from "../icons/flower.svg";
import { ReactComponent as Listdot} from "../icons/listdot.svg";




export default function Post(props) {
    
    const { post } = props;
    const username = 'Гаврила';
    const surname = 'Говорухин';
    const userstatus = 'Основатель группы';        
    const messagedate = new Date(post.created);  
console.log("messagedate=", messagedate);
// let hours = messagedate.getDate();
// console.log("hours=", hours);
// console.log("hoursType=", typeof(hours));
    
    console.log('post.created=', post.created)
    
    return (
        <div className='postConteiner'>
            <div className="header">
                <div className='avatar'style={{width: '20'}}></div>
                <div className='userdata'>
                    <div style={{color: 'rgb(10,40,172)'}}>{username + ' ' + surname}</div>
                    <div className='userstatus'>
                        <Founder style={{width: '16'}}/>
                        <div className='userstatusdata'>{userstatus}</div>
                        {/* <div className='data'>{data}</div> */}
                        <div style={{margin: '0 .3em 0 .3em', fontWeight: 600}}>&middot;</div>
                        <div style={{fontWeight: 600}}>{messagedate.toDateString()+' '+messagedate.toTimeString().slice(0,8)}</div>

                    </div>
                </div>
            </div>
            <div className='content'>{post.content}</div>
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
            <div className='footer'>
                <div className='avatar2'></div>
                <div className='commentblock'>
                    <div className='comment'>Напишите комментарий...</div>
                    {/* <div className='iconsrow'> */}
                        <Emoji/>
                        <Photo/>
                        <Flower/>
                        <Listdot/>
                    {/* </div> */}
                </div>
            </div>
        </div>
    )
} 