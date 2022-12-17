import React, {useState} from "react";
import PostForm from "./Components/UI/PostForm";
import './Style/style.css'
import PostComponents from "./Components/PostComponents";
import RemoveComponent from "./Components/UI/RemoveComponent/removeComponent";
import s from "./Components/UI/RemoveComponent/removeComponent.module.css";
function App(props) {
  const [posts,setPosts]= useState(props.posts)

    const createPost = (newPost)=>{
        setPosts([...posts,newPost])
    }
    const removePost = (post)=>{
        setPosts(posts.filter(p=> p.id !== post.id))
    }
    let isAuth = false
    const funcBlockEdit =(event)=>{
        let blockRemove = document.querySelector(`.${s.testObs}`)

        if(isAuth === false){
            blockRemove.style.display = 'flex'
            isAuth = true
        }
        if(event.target.className === s.testObs|| event.target.className  ){

            // console.log(blockRemove.style.display)
            if (isAuth === true){
                blockRemove.style.display = 'none'
                isAuth = false
            }
        }

  }
  return (
    <div className="App">
        <PostForm create={createPost}/>
        <PostComponents funcBlockEdit={funcBlockEdit} remove={removePost} posts={posts}/>
    </div>
  );
}

export default App;
