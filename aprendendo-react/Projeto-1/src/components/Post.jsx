import React from 'react';
import './Post.css';

const Post = ({ title, description, image }) => {
  return (
    <div className="post">
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={image} alt={title} />
    </div>
  );
};

export default Post;
