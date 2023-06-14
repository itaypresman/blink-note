import React, {useEffect, useState} from 'react';
import './OpenNotePopup.less';
import NoteExists from "@components/OpenNotePopup/NoteExists";
import NoteDoesNotExists from "@components/OpenNotePopup/NoteDoesNotExists";
import noteApi from "@utils/noteApi";
import Loading from "@components/OpenNotePopup/Loading";


export default ({id, getNote}) => {
    const [isHidden, setIsHidden] = useState(false);
    const [isExists, setIsExists] = useState(false);
    const [isLoading, seIsloading] = useState(true);

    useEffect(() => {
        isNoteExists();
    }, []);

    const openNote = () => {
        getNote();
        setIsHidden(true);
    };

    const isNoteExists = () => {
        noteApi.get(`/exists/${id}`)
            .then(res => {
                setIsExists((res.data.error === false) && res.data.isExist);
                seIsloading(false);
            })
            .catch(() => {seIsloading(false)});
    };

    console.log(isHidden);

    return (
        <div className={`popup-overlay ${isHidden ? '--hidden' : null}`}>
            <div className={'popup-content'}>
                {
                    isLoading
                        ? <Loading/>
                        : isExists
                            ? <NoteExists openNote={openNote}/>
                            : <NoteDoesNotExists/>
                }
            </div>
        </div>
    );
}
