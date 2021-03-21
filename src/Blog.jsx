import { useEffect, useState } from "react";

function PostCard({ post, user }) {
  return (
    <div id="card">
      <h2>{post.title}</h2>
      <h2>By: {user.name}</h2>
      <p>{post.body}</p>
    </div>
  );
}

function Blog() {
  const [postState, updatePosts] = useState({
    loading: true,
    posts: [],
  });

  const [userState, updateUsers] = useState({
    loading: true,
    users: [],
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => updatePosts({ posts: json, loading: false }));

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => updateUsers({ users: json, loading: false }));
  }, []);

  return postState.loading || userState.loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {postState.posts.map((post) => {
        return (
          <PostCard
            post={post}
            // user={userState.users[parseInt(post.userId--)]}
            user={
              userState.users.filter(
                (user) => parseInt(user.id) === parseInt(post.userId)
              )[0]
            }
          ></PostCard>
        );
      })}
    </div>
  );
}

export default Blog;
