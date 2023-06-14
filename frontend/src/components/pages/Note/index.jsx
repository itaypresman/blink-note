import React, { useState } from 'react';
import usePageTitle from '../../../hooks/usePageTitle';
import TextArea from '@components/TextArea';
import Disclaimer from '@components/Disclaimer';
import {useParams} from 'react-router';
import Label from '@components/Label';
import noteApi from '@utils/noteApi';
import OpenNotePopup from '@components/OpenNotePopup';


export default () => {
    usePageTitle('Create Note');
    const { id } = useParams();
    const [note, setNote] = useState('');

    const getNote = () => {
        noteApi.get(`/get/${id}`).then(res => setNote(res.data.note.text));
    };

    return (
        <div className={'note-form'}>
            <div className={'form-group'}>
                <div className={'form-group'}>
                    <Label>NoteID: {id}</Label>
                </div>

                <div className={'form-group'}>
                    <TextArea value={note} onChange={() => {}} disabled={true}/>
                    <Disclaimer>Attention! After refreshing the page, you will not be able to view this note again.</Disclaimer>
                </div>
            </div>

            <OpenNotePopup id={id} getNote={getNote}/>
        </div>
    );
}
