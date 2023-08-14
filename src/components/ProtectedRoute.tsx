import { Route, Navigate, Routes } from 'react-router-dom';
import { ProtectedRouteProps } from '../../types';


const ProtectedRoute:React.FC<ProtectedRouteProps>= ({element, isAuth,...rest}) => {
  return  isAuth ? (
    <Routes>
        <Route {...rest} element={element}/>
    </Routes>
  ):
    (
      <Navigate to="/" replace />
    );
}

export default ProtectedRoute