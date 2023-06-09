import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import AuthProvaiders from './AuthProvaiders/AuthProvaider';
import router from './Routes/Routes';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-7xl mx-auto'>
      <AuthProvaiders>
        <RouterProvider router={router} />
      </AuthProvaiders>
    </div>
  </React.StrictMode>,
)
