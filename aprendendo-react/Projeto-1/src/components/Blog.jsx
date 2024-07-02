import React from 'react';
import Post from './Post';
import './Blog.css';

const Blog = ({ onPostClick }) => {
  const posts = [
    {
      title: 'Primeira Imagem',
      description: 'Esta é uma imagem 150x150.',
      image: 'https://picsum.photos/150',
    },
    {
      title: 'Segunda Imagem',
      description: 'Esta é uma imagem 200x200.',
      image: 'https://picsum.photos/200',
    },
    {
      title: 'Terceira Imagem',
      description: 'Esta é uma imagem 250x250.',
      image: 'https://picsum.photos/250',
    },
  ];

  return (
    <div className="blog">
      {posts.map((post, index) => (
        <div key={index} onClick={() => onPostClick(post)}>
          <Post
            title={post.title}
            description={post.description}
            image={post.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Blog;