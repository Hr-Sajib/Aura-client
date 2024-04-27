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
import SignUp from './components/SignUp.jsx';
import Authprovider from './components/Authprovider.jsx';
import { HelmetProvider } from "react-helmet-async";
import LogIn from './components/LogIn.jsx';
import ArtDetails from './components/ArtDetails.jsx';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:'/',
        element: <Home/>,
        loader: ()=>fetch('http://localhost:5500/getarts')
      },
      {
        path:'/art&crafts',
        loader: ()=>fetch('http://localhost:5500/getarts'),
        element: <ArtCrafts/>
      },
      {
        path:'/addarts',
        element: <AddArt/>
      },
      {
        path:'/myarts/:email',
        loader:({params})=> fetch(`http://localhost:5500/getMyArts/${params.email}`),
        element: <Myarts/>
      },
      {
        path:'/signup',
        element: <SignUp/>
      },
      {
        path:'/login',
        element: <LogIn/>
      },
      {
        path:'/art/:id',
        loader: ({params})=> fetch(`http://localhost:5500/getart/${params.id}`),
        element: <ArtDetails/>
      },
      {
        path:'/art&crafts/art/:id',
        loader: ({params})=> fetch(`http://localhost:5500/getart/${params.id}`),
        element: <ArtDetails/>
      },
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </HelmetProvider>
  </React.StrictMode>,
)
