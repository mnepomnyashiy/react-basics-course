import React, {useState, useEffect} from 'react';

const ClickerFn = () => {
    const [count, setCount] = useState(0); // setCount(3)
    // const [name, setName] = useState('Mikhail');

    useEffect(() => {
        if (count === 0) {
            console.log('ClickerFn did mount');
        } else {
            console.log('ClickerFn did update');
        }

        return () => {console.log('ClickerFn will unmount')};
    }, [count]);

    return <div>
        <button onClick={() => setCount(count - 1)}>-</button>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
    </div>
}

export default ClickerFn;