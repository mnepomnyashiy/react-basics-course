import React from 'react';

const Loading = (props) => {
    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    }}>
        <img
        src="https://flevix.com/wp-content/uploads/2020/01/Bounce-Bar-Preloader-1.gif"
        alt=""
        style={{
            objectPosition: 'center',
            objectFit: 'cover'
        }}
        />
    </div>
}

export default Loading;
