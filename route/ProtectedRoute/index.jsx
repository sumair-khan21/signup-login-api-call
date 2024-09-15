import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  return localStorage.getItem("userUid") ? <Outlet /> : <Navigate to={"/"} />
}

export default ProtectedRoute;