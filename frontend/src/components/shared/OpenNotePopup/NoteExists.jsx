import React from 'react';
import Button from "@components/Button";
import {useNavigate} from "react-router";


export default ({openNote}) => {
    const navigate = useNavigate();

    const onMainPageClick = () => {
        navigate('/');
    };

    return (
        <>
            <div className={'popup-header'}>Do you want to open this note?</div>

            <div className={'popup-msg'}>
                <p>Attention!</p>
                <p>You can only view this note once. After closing the tab or refreshing, the note will be permanently
                    deleted.</p>
            </div>

            <div className={'form-group'}>
                <div className={'half --left'}>
                    <Button onClick={openNote} text={'Open Note'}/>
                </div>

                <div className={'half --right'}>
                    <Button onClick={onMainPageClick} text={'Main Page'}/>
                </div>
            </div>
        </>
    );
}
