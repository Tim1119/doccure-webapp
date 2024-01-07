import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {lazy,Suspense} from 'react'
import Loader  from "./components/Loader";
import DashboardLayout from "./layout/DashboardLayout";
import Login from "./pages/general/Login";
import Dashboard from "./pages/admin/Dashboard";



function App() {

  const router  = createBrowserRouter([
    {
      path:'/admin-dashboard',
      element:(
          <Suspense fallback={<Loader />} >
            <DashboardLayout >
              <Dashboard />
             
            </DashboardLayout>
          </Suspense>
      )
    }
  ])
  

  return (
    <>
    <RouterProvider router={router} fallbackElement={<Loader />} />
 </>
  )
}

export default App

