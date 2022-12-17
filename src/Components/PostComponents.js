import React from 'react';

import Post from "./Post";

function PostComponents(props) {
    return (
       <>
           {
               props.posts.map((postItem,index)=>{
                   // console.log(postItem)
                   return(<Post   funcBlockEdit={props.funcBlockEdit} remove={props.remove}  number={index + 1} post={postItem} key={postItem.id}/>)

               })
           }
       </>
    );
}

export default PostComponents;