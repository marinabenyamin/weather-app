import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios'
import './index.css';
import App from './App';
import WeatherApp from './components/WeatherApp/WeatherApp';
import Input from './components/Input/Input';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {path:'/',
    element:<WeatherApp/>,
  loader: async ()=>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=cairo&appid=1b41380eb980e6d0675655a7cf59416c`);
      return resp.data;
  }
  },
  {
    path:'/input',
    element:<Input/>
  },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
