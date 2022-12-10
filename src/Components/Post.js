import React from 'react';
import PostInput from "./UI/PostInput/PostInput";
import CloseButton from "./UI/closeButton/closeButton";

function Post(props) {
    return (
        <div className='postComponent'>
            <PostInput/>
            <label>{props.number} {props.post.body}</label>
            <CloseButton onClick={()=>props.remove(props.post)}/>
        </div>
    );
}

export default Post;