import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import ArtCrafts from './components/ArtCrafts.jsx';
import AddArt from './components/AddArt.jsx';
import Myarts from './components/Myarts.jsx';






const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'/art&crafts',
        element: <ArtCrafts/>
      },
      {
        path:'/addarts',
        element: <AddArt/>
      },
      {
        path:'/myarts',
        element: <Myarts/>
      },
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
