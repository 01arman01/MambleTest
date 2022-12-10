import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import posts from "./data/data";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App posts={posts} />,
    document.getElementById('root')
);


