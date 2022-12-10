import React, {useState} from "react";
import PostForm from "./Components/UI/PostForm";
import './Style/style.css'
import PostComponents from "./Components/PostComponents";
import RemoveComponent from "./Components/UI/RemoveComponent/removeComponent";
function App(props) {
  const [posts,setPosts]= useState(props.posts)

    const createPost = (newPost)=>{
        setPosts([...posts,newPost])
    }
    const removePost = (post)=>{
        setPosts(posts.filter(p=> p.id !== post.id))
    }
  return (
    <div className="App">
        <PostForm create={createPost}/>
        <PostComponents  remove={removePost} posts={posts}/>
        {/*<RemoveComponent />*/}
    </div>
  );
}

export default App;
