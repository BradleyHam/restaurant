import React from 'react';
import './Button.scss';

const Button = (props) => {

    return (
        <button className={props.dark ? 'dark' : 'light'}>

            {props.text}
        </button>
    );
}

export default Button;