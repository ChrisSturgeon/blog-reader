import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Post.css';

export default function Post(props) {
  const { postId } = useParams();
  const postUrl = `http://localhost:3000/posts/${postId}`;

  // Fetches post details on mount
  useEffect(() => {
    const getPost = async () => {
      const post = await fetch(postUrl);
      const postData = await post.json();
      console.log(postData.post);
    };
    getPost();
  }, []);

  return <div>{postId}</div>;
}
