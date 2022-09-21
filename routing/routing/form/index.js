import React from 'react';
import App from './App';
import ReactDom from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
reportWebVitals();

