import { useEffect } from 'react';


export default (title) => {
    useEffect(() => {
        document.title = `Blink Note | ${title}`;
    }, [title]);
}
