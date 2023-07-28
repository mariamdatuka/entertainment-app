import { createBrowserRouter,RouterProvider } from "react-router-dom"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import UserHomePage from  './pages/UserHomePage'

const router=createBrowserRouter([
    {
      path:'/',
      element:<LogIn/>
    },
    {
      path:'/signup',
      element:<SignUp/>
    },
    {
      path:'/userprofile',
      element:<UserHomePage/>
    },
])

function App() {


  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
