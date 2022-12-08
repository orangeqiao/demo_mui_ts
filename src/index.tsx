import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import "./"
//导入路由
import {BrowserRouter} from'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
    {/* 全局引入路由 */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

