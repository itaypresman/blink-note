import React from 'react';
import './Label.less';


export default ({ children }) => {

    return (
        <label className={'label'}>
            {children}
        </label>
    );
}
