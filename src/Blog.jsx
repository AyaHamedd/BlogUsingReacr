// 1.Blog. has many Post Cards
// 2.PostCard.

import { useEffect, useState } from "react";

function PostCard({ post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}

function Blog() {
  const [state, updateState] = useState({
    loading: true,
    posts: [],
    // users: []
  });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => updateState({posts: json, loading: false}));
    console.log(state);
  }, [state.posts]);
  return (
    <div>
      {state.loading ? <p>Loading...</p> :
      state.posts.map((post) => (
        <PostCard post={post}></PostCard>
      ))}
    </div>
  );
}

export default Blog;
