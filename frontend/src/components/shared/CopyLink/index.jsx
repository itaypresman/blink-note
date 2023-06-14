import React, {useRef} from 'react';
import './CopyLink.less';


export default ({ text }) => {
    const ref = useRef(null);
    const selectClick = () => {
        console.log(ref)
        if (ref.current) {
            ref.current.select();
        }
    };

    const copyClick = () => {
        if (ref.current) {
            selectClick();
            document.execCommand('copy');
        }
    };

    return (
        <input
            ref={ref}
            onClick={selectClick}
            onDoubleClick={copyClick}
            type={'text'}
            className={'txt'}
            value={text}
            onChange={() => {}}
        />
    );
}
