import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DetailPage from './routers/DetailPage'
import HomePage from './routers/HomePage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import dataSrc from './dataSrc.json';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const dataLoader = () => {
  return dataSrc;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: dataLoader,
    children:[
      {
        path: "/",
        element: <HomePage/>,
        loader: dataLoader
      },
      {
        path: "/:videoId",
        element: <DetailPage/>,
        loader: dataLoader
      },
    ],
  },
  
]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
