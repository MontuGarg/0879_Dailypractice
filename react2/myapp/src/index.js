import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Welcome from './component/Welcome';
import Registration from './component/Registration';
import Login from './component/login';
import Layout from './component/layout';
import About from './component/about';
import {BrowserRouter,Routes,Route} from "react-router-dom";
export default function App(){
  return (
    <BrowserRouter>
        <Routes>
             <Route path='/' element={<Layout/>}>
               <Route exist path="Welcome" element={<Welcome/>}/>
               <Route path="about" element={<About/>}/>
               <Route path="registration" element={<Registration/>}/>
               <Route path="login" element={<Login/>}/>
             </Route>
        </Routes>
    </BrowserRouter>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
