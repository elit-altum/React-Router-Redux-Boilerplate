import React from 'react';

const Summary = (props) => {
    return (
        <div className="page-header">
            <div className="content-container">
                <p className="page-header__greeting">{props.name}</p>
            </div>           
        </div>
    )
};

export default Summary;

