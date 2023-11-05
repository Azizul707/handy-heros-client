import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './Routes/MainRoutes'
import AuthProvider from './Auth/AuthProvider'

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={ MainRoutes }></RouterProvider>
    </React.StrictMode>
  </AuthProvider>
)
