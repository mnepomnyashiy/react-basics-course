import React, {useState, useEffect} from 'react';

import Loading from '../Loading/Loading';
import UserItem from '../UserItem/UserItem';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data)
                setLoading(false)
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            })
    }, []);

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