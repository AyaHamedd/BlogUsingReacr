// 1.Blog. has many Post Cards
// 2.PostCard.

import { useEffect, useState } from "react";

function PostCard({ post, authorName }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <h3>{authorName}</h3>
      <p>{post.body}</p>
    </div>
  );
}

// function getUserName({ post, users }) {

//   users.each(user => {
//     if(post.userid === user.id){
//       return user.name
//     }
//   })

// }

const getUserName = ({ post, users }) => (
  users.each(user => {
    if(post.userid === user.id){
      return user.name
    }
  })
);

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
          // state.users.map((user) => {
          //   if (user.id === post.userId) {
          //     return post.assign(user);
          //   }
          // });
          return <PostCard post={post} authorName={getUserName({ post, state.users })}></PostCard>;
        })
      )}
    </div>
  );
}

export default Blog;
