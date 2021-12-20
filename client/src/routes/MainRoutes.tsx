import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../views/Home/Home';
import Signup from '../views/Signup/Signup';
import Login from '../views/Login/Login';
import PrivateRoute from './PrivateRoute';

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<PrivateRoute><Home/></PrivateRoute>} />
    </Routes>
  );
}

export default MainRoutes;