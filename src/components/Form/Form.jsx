import React, {useState} from 'react';

const Form = ({setLoading, setUsers, isChecked, setIsChecked}) => {
    const [searchInput, setSearchInput] = useState('');

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);    
    }

    const handleKey = (e) => {
        if(e.key === "Enter") {
            if (e.target.value !== '') {
                setLoading(true);
                fetch(`https://api.github.com/search/users?q=${e.target.value}`)
                    .then(response => response.json())
                    .then(data => {
                        setUsers(data.items);
                        setLoading(false);
                    })
                    .catch(() => setLoading(false))
            }
        }
    }

    return <form onSubmit={(e) => {e.preventDefault()}}>
        <input
            name="search"
            type="search"
            className="form-control"
            onChange={handleInputChange}
            value={searchInput}
            onKeyDown={handleKey}
        />

        <div className="form-group form-check">
            <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
                onChange={(e) => {setIsChecked(e.target.checked)}}
                checked={isChecked}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">Только новые пользователи</label>
        </div>
    </form>
}

export default Form;

