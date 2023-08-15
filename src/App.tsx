import {useState} from 'react';
import {Routes,Route,Navigate} from "react-router-dom"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import UserHomePage from  './pages/UserHomePage'
import Movies from "./pages/Movies"


function App() {

 const [isAuth,setIsAuth]=useState<boolean>(false)
   

  return (
    <>
      <Routes>
         <Route path='/' element={<LogIn setIsAuth={setIsAuth}/>}/>
         <Route path='/signup' element={<SignUp/>}/>
         <Route path='/userprofile' 
         element={
            isAuth?(
              <UserHomePage/>
            ):(
              <Navigate to='/'/>
            )
         }
         >
           <Route path='movies' element={<Movies/>}/>
         </Route>
         
      </Routes>
    </>
  )
}

export default App
