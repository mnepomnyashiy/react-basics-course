import React from 'react';

import Loading from '../Loading/Loading';
import UserItem from '../UserItem/UserItem';

const UserList = ({users, loading, isChecked}) => {
    const usersToDOM = isChecked ? users.filter((user) => user.id > 1000000) : users;
    
    if (loading) {
        return <Loading />
    }

    return <div className="user-list">
        {
            usersToDOM.length ? usersToDOM.map(user => (
                <UserItem key={user.login} {...user} />
            )) : 'Пользователей нет.'
        }
    </div>
}

export default UserList;