import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [test, setTest] = useState(['one', 'two', 'three']);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      console.log('Yeah boy');
      const allPosts = await fetch('http://localhost:3000/posts/all');
      const data = await allPosts.json();
      setPosts(data.posts);
      console.log(data.posts);
    };
    getPosts();
  }, []);

  return (
    <div>
      {posts
        ? posts.map((post) => {
            return (
              <div key={post._id}>
                <h1>{post.title}</h1>
                <p>{post.content}</p>
              </div>
            );
          })
        : 'Not loaded'}
    </div>
  );
}

export default App;
