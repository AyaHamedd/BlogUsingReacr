// 1.Blog. has many Post Cards
// 2.PostCard.

import { useEffect } from "react";
import {useState}    from "react";

function PostCard( {post}) {
  return <div><h2>post.title</h2><p>post.body</p></div>;
}

function Blog() {

  const [state, updateState] = useState({
    loading: false,
    posts: [],
    // users: []
  });
  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  ).then((json) => (
    updateState(json)
  ))
console.log(state)
  }) ;
   return(<h1>leena</h1>);
}
  
  



export default Blog;
