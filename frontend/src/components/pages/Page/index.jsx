import React from 'react';
import './page.less';
import {useNavigate} from "react-router";

export default ({ children }) => {
    const navigate = useNavigate();

    const onHeaderClick = () => {
        navigate('/');
    }

    return (
        <div className={'page-container'}>
            <div className={'content-container'}>
                <h2 className={'header'} onClick={onHeaderClick}>Blink Note</h2>
                {children}
            </div>
        </div>
    );
}
