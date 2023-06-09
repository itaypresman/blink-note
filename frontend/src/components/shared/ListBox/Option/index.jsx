import React from 'react';
import './Option.less';


export default ({ value, label}) => {
    return (
        <option className={'opt'} value={value}>{label}</option>
    );
}
