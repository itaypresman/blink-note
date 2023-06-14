import React, {useEffect, useState} from 'react';
import usePageTitle from "../../../hooks/usePageTitle";
import TextArea from "@components/TextArea";
import './main.less';
import ListBox from "@components/ListBox";
import Button from "@components/Button";
import CopyLink from "@components/CopyLink";
import Disclaimer from "@components/Disclaimer";
import noteApi from "@utils/noteApi";


export default () => {
    const [disabled, setDisabled] = useState(true);
    const [note, setNote] = useState('');
    const [validFor, setValidFor] = useState('');
    const [noteLink, setNoteLink] = useState('');

    useEffect(() => {
        if (note && validFor) {
            setDisabled(!(note && validFor));
        }
    }, [note, validFor]);

    usePageTitle('Create Note');
    const validForItems = [
        { label: 'Valid for', value: '' },
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

    const onNoteChange = e => {
        setNote(e.target.value);
    };

    const onValidForChange = e => {
        setValidFor(e.target.value);
    };

    const onSendClick = () => {
        noteApi
            .post('/create', { text: note, validFor })
            .then(res => {
                setNoteLink(`${process.env.FRONT_URL}/note/${res.data.id}`);
                setNote('');
                setValidFor('');
            });
    };

    return (
        <div className={'note-form'}>
            <div className={'form-group'}>
                <TextArea value={note} onChange={onNoteChange} placeholder={'Type your note...'}/>
            </div>

            <div className={'form-group --left'}>
                <div className={'half --left'}>
                    <Button onClick={onSendClick} text={'Create'} disabled={disabled}/>
                </div>

                <div className={'half --right'}>
                    <ListBox onChange={onValidForChange} value={validFor} items={validForItems}/>
                </div>
            </div>

            <div className={`form-group ${noteLink ? null : '--hidden'}`}>
                <CopyLink text={noteLink}/>
                <div className={'disclaimer-container'}>
                    <Disclaimer>One click to select</Disclaimer>
                    <Disclaimer>Double click to copy</Disclaimer>
                </div>
            </div>
        </div>
    );
}
