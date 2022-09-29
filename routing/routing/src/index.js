import React from 'react';
import ReactDom from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Router} from "react-router-dom";
import Form from "./pages/Form";
import Home from "./pages/Home";
export default function App(){
    return(
        <div className='App'>
            <BrowserRouter>
                <Router>
                    <Route path="" element={<Home/>} >
                        <Route path="form" element={<Form/>}/>
                    </Route>
                </Router>
            </BrowserRouter>
            <Form/>
        </div>
    )
}
const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
reportWebVitals();

