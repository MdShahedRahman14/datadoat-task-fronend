import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import AuthProviders from './Providers/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProviders>
   <div  className="max-w-7xl font-mono  mx-auto px-2">
   <RouterProvider router={router}></RouterProvider>
   </div>
   </AuthProviders>
  </React.StrictMode>,
)
