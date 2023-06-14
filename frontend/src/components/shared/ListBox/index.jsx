import React from 'react';
import './ListBox.less';
import Option from "@components/ListBox/Option";


export default ({ value, onChange, items = [] }) => {
    const options = items.map(item => <Option key={item.value} value={item.value} label={item.label}/>);

    return (
        <select value={value} onChange={onChange} className={'list-box'}>
            {options}
        </select>
    );
}
