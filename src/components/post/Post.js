import React from 'react';

import './styles.scss';

export default ({post}) => {
    return (
        <div className='card'>
            <h5>Title {post}</h5>
        </div>
    );
}
