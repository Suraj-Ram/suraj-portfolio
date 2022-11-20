import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import AboutMe from './components/AboutMe';
import Projects2 from './components/Projects2';
import Experience from './components/Experience';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App main={<AboutMe/>}></App>,
  },
  {
    path: "/projects",
    element: <App main={<Projects2/>}></App>,
  },
  {
    path: "/experience",
    element: <App main={<Experience/>}></App>,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
