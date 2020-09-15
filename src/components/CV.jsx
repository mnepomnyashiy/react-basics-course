import React from 'react';

const mainClass = "name1 name2";

function CV(props) {
    const {
        name = "Bill Gates",
        prof = "Web-developer",
        spec = "Businessman",
    } = props;

    return <div className="cv">
        <h2 className={mainClass}>{name}</h2>
        <h4>{prof}</h4>
        <h4>{spec}</h4>
    </div>
}

export default CV;