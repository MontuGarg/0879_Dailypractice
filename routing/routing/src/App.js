import React from 'react';

import Home from './home2';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
const App=()=>{
    return(
        // react fragment
        <div className='App'>
            <Home/> 
              <h1>hello world</h1>
              <h2>h2 heading</h2>
        </div>
    )
}


export default App;     