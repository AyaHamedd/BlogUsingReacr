// 1.Blog. has many Post Cards
// 2.PostCard.

import { useEffect } from "react";

function PostCard() {
  return <div></div>;
}

function Blog() {

  const [state, updateState] = useState({
    loading: false,
    posts: [],
    users: []
  });
  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => response.json()
  ).then((json) => (
    updateState({ json })
  ))

  })
}
  
  
}


export default App;
