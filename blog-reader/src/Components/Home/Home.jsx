import React, { useState, useEffect } from 'react';
import './Home.css';

export default function Home({ allPosts, isMobile }) {
  return (
    <div className="home-wrapper">
      {/* <div>
        {allPosts
          ? allPosts.map((post) => {
              return (
                <div key={post._id}>
                  <h1>{post.title}</h1>
                  <p>{post.content}</p>
                </div>
              );
            })
          : 'Not loaded'}
      </div> */}
      <div>
        <p>{isMobile ? 'I am mobile' : 'Im a big a boy'} home page</p>
      </div>
    </div>
  );
}
