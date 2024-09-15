import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './route/protectedRoute';
import AuthRoute from './route/AuthRuote';




function App() {
  
  return (
    <>
    <Routes>
    <Route element={<AuthRoute />}> 
    <Route index element={<Login />} />
    <Route path='/signup'index element={<SignUp />} />
      </Route>
      
      {/* this is called private routes */}
      <Route element={<ProtectedRoute />}> 
      {/* <Route path='/dashboard' element={<Dashboard />} /> */}
      <Route path='/dashboard/*' element={<Dashboard />} />

      
      
      </Route>
    </Routes>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
  )
}

export default App
