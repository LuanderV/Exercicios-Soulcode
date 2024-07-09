import React, { useState } from 'react';
import './Post.css';

const Post = ({ titulo, descricao }) => {
    const [curtido, setCurtido] = useState(false);

    const toggleCurtida = () => {
        setCurtido(!curtido);
    };

    return (
        <div className="post-container">
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <button className={`post-button ${curtido ? 'curtido' : ''}`} onClick={toggleCurtida}>
                {curtido ? 'Descurtir' : 'Curtir'}
            </button>
            {curtido && <p>Você curtiu este post!</p>}
        </div>
    );
};

export default Post;
