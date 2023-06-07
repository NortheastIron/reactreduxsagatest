import React from 'react';

import './styles.scss';

export default ({post}) => {
    return (
        <div className='card'>
            <h5>{post.title}</h5>
        </div>
    );
}
