import React from 'react';

type ButtonProps = {
    handleClick: () => void
}

const Button = ({handleClick}: ButtonProps): JSX.Element => {
    return (
        <button onClick={handleClick}>
            Increment
        </button>
    )
}

export default Button;
