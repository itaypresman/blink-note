import React, { useState } from 'react';
import usePageTitle from "../../../hooks/usePageTitle";
import TextArea from "@components/TextArea";
import './main.less';
import ListBox from "@components/ListBox";
import Button from "@components/Button";
import Label from "@components/Label";
import CopyLink from "@components/CopyLink";
import Disclaimer from "@components/Disclaimer";

export default () => {
    usePageTitle('Create Note');

    const [disabled, setDisabled] = useState(false);

    const validForItems = [
        { label: 'Valid for', value: null },
        { label: '1 Hour', value: '1h' },
        { label: '12 Hours', value: '12h' },
        { label: '1 Day', value: '1d' },
        { label: '3 Days', value: '3d' },
        { label: '1 Week', value: '1w' },
        { label: '2 Weeks', value: '2w' },
        { label: '1 Month', value: '1m' },
        { label: '3 Months', value: '3m' },
        { label: '6 Months', value: '6m' },
    ];

    return (
        <div className={'note-form'}>
            <div className={'form-group'}>
                <TextArea/>
            </div>

            <div className={'form-group --left'}>
                <div className={'half --left'}>
                    <Button text={'Create'} disabled={disabled}/>
                </div>

                <div className={'half --right'}>
                    <ListBox items={validForItems}/>
                </div>
            </div>

            <div className={'form-group'}>
                <CopyLink text={'http://localhost:3000'}/>
                <div className={'disclaimer-container'}>
                    <Disclaimer>One click to select</Disclaimer>
                    <Disclaimer>Double click to copy</Disclaimer>
                </div>
            </div>
        </div>
    );
}
