import React from 'react'

const ErrorComponent = ({ error }) => {
    if (error){
        return(
            <div className="error">{error}</div>
        )
    }
    return (<span></span>)
};

export default ErrorComponent;