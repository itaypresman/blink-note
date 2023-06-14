import React from 'react';
import './TextArea.less';


export default ({ value, onChange, placeholder = '', rows = 12, disabled = false }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            className={'textarea'}
            rows={rows}
            placeholder={placeholder}
            disabled={disabled}
        />
    );
}
