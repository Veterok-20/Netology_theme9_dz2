import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function NewPost(props) {
    const { onChange, userContent, onClickSave } = props;
    return (
        <>
            <input type='text' onChange={(e) => onChange(e)} value={userContent} />
            <button onClick={onClickSave}>Save</button>
            <Link to= '/'>
            <button >X</button>
            </Link>

        </>
    )

}