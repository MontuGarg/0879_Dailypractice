import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from './components/Layout';
// import Home from './components/Home';
// import Signup from './components/signup';
// import Login from './components/login';
// import About from './components/About';
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// const App=()=>{
//   return(
//     <div>
//       <BrowserRouter>
//           <Routes>
//             <Route path='/' element={<Layout/>}>
//                  <Route path='home' element={<Home/>} />
//                  <Route path='about' element={<About/>}/>
//                  <Route path='signup' element={<Signup/>}/>
//                  <Route path='login' element={<Login/>}/>
//             </Route>
//           </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
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
