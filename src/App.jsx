import React from 'react'
import {createBrowserRouter ,  RouterProvider} from 'react-router-dom'
import Home from './components/Home'
import MovieDetails from './components/MovieDetails'
import AppLayout from './components/AppLayout'
const App = () => {


  const router = createBrowserRouter([

      {
        path:"/",
        element:<AppLayout/>,
        children:[
          {
            path:"/",
            element: <Home/> 
          },
          {
            path:"/moviedetails/:id",
            element:<MovieDetails/>
          },
        ]
      }


  ])


  return (

    <div>
      <RouterProvider router={router} />
    </div>


  )



}

export default App