import React from 'react';
import './TextArea.less';


export default ({ rows = 12 }) => {
    return (
        <textarea className={'textarea'} rows={rows} placeholder={'Type your note...'}></textarea>
    );
}
