import React from 'react';

import Loading from '../Loading/Loading';
import UserItem from '../UserItem/UserItem';

const UserList = ({users, loading}) => {
    if (loading) {
        return <Loading />
    }

    return <div className="user-list">
        {
            users.length ? users.map(user => (
                <UserItem key={user.login} {...user} />
            )) : 'Пользователей нет.'
        }
    </div>
}

export default UserList;