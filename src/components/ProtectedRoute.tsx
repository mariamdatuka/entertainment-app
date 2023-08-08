import { Route, Navigate } from 'react-router-dom';


const ProtectedRoute = ({element, isAuth,...rest}) => {
  return  isAuth ? (
      <Route {...rest} element={element}/>
  ):
    (
      <Navigate to="/login" replace />
    );
}

export default ProtectedRoute