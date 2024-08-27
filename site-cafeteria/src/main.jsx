import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import DeliveryPage from './components/DeliveyPage.jsx'

const router = createBrowserRouter ([

  {path: '/',
    element: <App />
  },

  {path: '/deliverypage',
    element: <DeliveryPage />

  }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    
  </RouterProvider>
)
