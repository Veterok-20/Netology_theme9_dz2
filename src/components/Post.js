import React from 'react';

export default function Post(props) {
    
    const { post } = props;
    const username = 'Гаврила';
    const surname = 'Говорухин';
    const userstatus = 'Основатель группы';
    
    return (
        <div className='postConteiner'>
            <div className="header">
                <div className='avatar'></div>
                <div className='userdata'>
                    <div className='username'>{username + ' ' + surname}</div>
                    <div className='userstatus'>
                        <div className='iconstaus'></div>
                        <div className='userstatusdata'>{userstatus}</div>
                        {/* <div className='data'>{data}</div> */}
                    </div>
                </div>
            </div>
            <div className='content'>{post.content}</div>
            <hr className='line' />
            <div className='emotions'>
                <div className='emotionblock'>
                    <div>
                        <div className='emotionicon'></div>
                        <div className='emotion'>Нравится</div>
                    </div>
                </div>
                <div className='emotionblock'>
                    <div>
                        <div className='emotionicon'></div>
                        <div className='emotion'>Комментировать</div>
                    </div>
                </div>
            </div>
            <hr className='line' />
            <div className='footer'>
                <div className='avatar2'></div>
                <div className='commentblock'>
                    <div className='comment'>Напишите комментарий...</div>
                    <div className='iconsrow'>
                        <div className='icon'>*</div>
                        <div className='icon'>*</div>
                        <div className='icon'>*</div>
                        <div className='icon'>*</div>
                    </div>
                </div>
            </div>
        </div>
    )
} 