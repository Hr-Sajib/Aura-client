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
import UpdatePage from './components/UpdatePage.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import CategoryItems from './components/CategoryItems.jsx';







const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'/',
        element: <Home/>,
        errorElement:<ErrorPage/>,
        loader: ()=>fetch('http://localhost:5500/getarts')
      },
      {
        path:'/art&crafts',
        loader: ()=>fetch('http://localhost:5500/getarts'),
        errorElement:<ErrorPage/>,
        element: <ArtCrafts/>
        
      },
      {
        path:'/addarts',
        errorElement:<ErrorPage/>,
        element: <PrivateRoute><AddArt/></PrivateRoute>
      },




      {
        path:'/myarts/:email',
        errorElement:<ErrorPage/>,
        loader:({params})=> fetch(`http://localhost:5500/getMyArts/${params.email}`),
        element:  <PrivateRoute><Myarts/></PrivateRoute>
      },
      {
        path:'/myarts/:email/update/:id',
        errorElement:<ErrorPage/>,
        loader:({params})=> fetch(`http://localhost:5500/getart/${params.id}`),
        element: <PrivateRoute><UpdatePage/></PrivateRoute>
      },




      {
        path:'/signup',
        errorElement:<ErrorPage/>,
        element: <SignUp/>
      },
      {
        path:'/login',
        errorElement:<ErrorPage/>,
        element: <LogIn/>
      },




      {
        path:'/art/:id',
        errorElement:<ErrorPage/>,
        loader: ({params})=> fetch(`http://localhost:5500/getart/${params.id}`),
        element: <ArtDetails/>
      },
      {
        path:'/art&crafts/art/:id',
        errorElement:<ErrorPage/>,
        loader: ({params})=> fetch(`http://localhost:5500/getart/${params.id}`),
        element: <ArtDetails/>
      },


      {
        path:'/categoryItems/:categoryName',
        errorElement:<ErrorPage/>,
        loader: ()=>fetch('http://localhost:5500/getarts'),
        element: <CategoryItems/>
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
