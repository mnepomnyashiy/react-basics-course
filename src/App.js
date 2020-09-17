import React, {useState, useEffect} from 'react';
import './App.css';

import PostList from './components/PostList/PostList';
import UserList from './components/UserList/UserList';
import Form from './components/Form/Form';

function App() {
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

  return (
    <div className="App">
      <Form setUsers={setUsers} setLoading={setLoading}/>
      <UserList users={users} loading={loading}/>
    </div>
  );
}

export default App;
