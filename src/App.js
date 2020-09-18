import React, {useState, useEffect} from 'react';
import './App.css';

import UserList from './components/UserList/UserList';
import Form from './components/Form/Form';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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
      <Form
        setUsers={setUsers}
        setLoading={setLoading}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
      />
      <UserList users={users} loading={loading} isChecked={isChecked} />
    </div>
  );
}

export default App;
