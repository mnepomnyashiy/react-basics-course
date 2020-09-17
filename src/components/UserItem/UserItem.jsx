import React from 'react';

const UserItem = (props) => {
    return <div className="card" style={{width: '200px'}}>
        <img src={props.avatar_url} className="card-img-top" alt={props.login} />
        <div className="card-body">
            <h5 className="card-title">{props.login.toUpperCase()}</h5>
<p>{props.id}</p>
            <a href={props.html_url} className="btn btn-primary">Watch on GitHub</a>
        </div>
    </div>
}

export default UserItem;