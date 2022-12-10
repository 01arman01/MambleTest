import React, {useState} from 'react';
import MyInput from "./input/MyInput";
import MyButton from "./button/MyButton";
import {type} from "@testing-library/user-event/dist/type";


function PostForm({create}) {
    const [post,setPost]= useState({check:false,body:''})

    const addNewPost = (e)=> {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now(),
        }

        create(newPost)
        setPost({
          check:false,
          body:''
          })
        }

    return (
        <div>
            <h1 className='header'> Task</h1>
            <form className='formAdd'>
                <MyInput
                    value={post.body}
                    onChange={e=>{
                        return setPost({...post,body:e.target.value})
                        //    test
                    }}
                    placeholder='write here'

                />
                <MyButton onClick={addNewPost}/>
            </form>
        </div>
    );
}

export default PostForm;