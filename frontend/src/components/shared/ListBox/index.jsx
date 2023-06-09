import React from 'react';
import './ListBox.less';
import Option from "@components/ListBox/Option";


export default ({ items = [] }) => {
    const options = items.map(item => <Option key={item.value} value={item.value} label={item.label}/>);

    return (
        <select className={'list-box'}>
            {options}
        </select>
    );
}
