import React from 'react';
import './TextArea.less';


export default ({ value, onChange, rows = 12 }) => {
    return (
        <textarea
            value={value}
            onChange={onChange}
            className={'textarea'}
            rows={rows} placeholder={'Type your note...'}
        />
    );
}
