import React from 'react';
import './Button.less';


export default ({ text, onClick, disabled = false }) => {
    return (
        <button className={'btn'} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}
