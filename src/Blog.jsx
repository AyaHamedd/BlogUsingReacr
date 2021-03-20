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
    users: [],
  });
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => updateState({ posts: json, loading: false }));
    console.log(state);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => updateState({ users: json, loading: false }));
  }, []);

  return (
    <div>
      {state.loading ? (
        <p>Loading...</p>
      ) : (
        state.posts.map((post) => {
          // state.users.filter((user) => user.id == post.userId);
          state.users.map((user) => {
            if (user.id === post.userId) {
              return post.assign(user);
            }
          });
          return <PostCard post={post} user={state}></PostCard>;
        })
      )}
    </div>
  );
}

export default Blog;
