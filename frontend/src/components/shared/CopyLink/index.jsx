import React from 'react';
import './CopyLink.less';


export default ({ text }) => {
    return (
        <input type={'text'} className={'txt'} value={text} disabled={true}/>
    );
}
