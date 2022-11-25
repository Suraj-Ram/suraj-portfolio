import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutMe from './components/AboutMe';
import Projects2 from './components/Projects2';
import Experience from './components/Experience';
import ErrorPage from './components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App main={<AboutMe/>}></App>,
    errorElement: <ErrorPage />
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