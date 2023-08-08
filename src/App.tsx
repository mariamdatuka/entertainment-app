import { useState } from "react"
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import UserHomePage from  './pages/UserHomePage'
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

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
      element:(
        <ProtectedRoute
        element={<UserHomePage />}
        isAuth={isAuth}
      />
      )
    },
])

  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
