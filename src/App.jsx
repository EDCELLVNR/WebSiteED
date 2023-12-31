import React from 'react'
import {Navbar, Footer, Team} from './components';
import { Home,Teams } from './pages';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const Layout = ()=>{
    return(
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/team",
          element: <Teams />,
        },
       
        
      ],
    },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);

  return (
    <div>
      <RouterProvider router={router} />

      {/* <Navbar/> */}
    </div>
  )
}

export default App
