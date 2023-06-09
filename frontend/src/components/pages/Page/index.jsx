import React from 'react';
import './page.less';

export default ({ children }) => {
    return (
        <div className={'page-container'}>
            <div className={'content-container'}>
                <h2 className={'header'}>Blink Note</h2>
                {children}
            </div>
        </div>
    );
}
