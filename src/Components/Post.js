import React from 'react';
import PostInput from "./UI/PostInput/PostInput";
import CloseButton from "./UI/closeButton/closeButton";
import RemoveComponent from "./UI/RemoveComponent/removeComponent";

function Post(props) {
    return (
        <div className='postComponent'>
            <PostInput/>
            <label>{props.number} {props.post.body}</label>
            {/*<CloseButton onClick={()=>props.remove(props.post)}/>*/}
            <CloseButton onClick={(event)=>props.funcBlockEdit(event)}/>
            <RemoveComponent   remove={props.remove} post={props.post}   funcBlockEdit={props.funcBlockEdit}/>
        </div>
    );
}

export default Post;