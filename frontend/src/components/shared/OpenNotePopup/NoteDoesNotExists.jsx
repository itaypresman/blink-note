import React from 'react';
import Button from "@components/Button";
import {useNavigate} from "react-router";


export default () => {
    const navigate = useNavigate();

    const onMainPageClick = () => {
        navigate('/');
    };

    return (
        <>
            <div className={'popup-header'}>Note does not exist!</div>

            <div className={'popup-msg'}>
                <p>Sorry, this note does not exist!</p>
                <p>It's possible that you entered the wrong URL or someone else opened this note before you :(</p>
            </div>

            <div className={'form-group'}>
                <Button onClick={onMainPageClick} text={'Main Page'}/>
            </div>
        </>
    );
}
