import React, {useState} from 'react';

const Form = ({setLoading, setUsers}) => {
    const [searchInput, setSearchInput] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    // const [selectValue, setSelectValue] = useState('1');

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);

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

    return <form onSubmit={(e) => {e.preventDefault()}}>
        <input
            name="search"
            type="search"
            className="form-control"
            onChange={handleInputChange}
            value={searchInput}
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

        {/* <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Example select</label>
            <select
                className="form-control"
                id="exampleFormControlSelect1"
                onChange={e => {setSelectValue(e.target.value)}}
                value={selectValue}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </div> */}
    </form>
}

export default Form;

