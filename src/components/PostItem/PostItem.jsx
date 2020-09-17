import React from 'react';

const PostItem = ({title, body}) => {
    return <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        </div>
    </div>
}

export default PostItem;
