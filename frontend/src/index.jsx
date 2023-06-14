import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./components/pages/Main";
import Page from './components/pages/Page';
import '@public/styles/styles.less';


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <>
        <Page>
            <Router>
                <Routes>
                    <Route path={'/'} exact={true} element={<Main/>}/>
                    <Route path={'/note/:id'} element={<Main/>}/>
                </Routes>
            </Router>
        </Page>
    </>
);
