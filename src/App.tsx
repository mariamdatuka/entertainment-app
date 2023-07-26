import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Homepage from "./pages/Homepage"
import SignUp from "./pages/SignUp"


 
const router=createBrowserRouter([
    {
      path:'/',
      element:<Homepage/>
    },
    {
      path:'/signup',
      element:<SignUp/>
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
