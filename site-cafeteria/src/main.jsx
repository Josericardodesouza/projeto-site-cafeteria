import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import DeliveryPage from './components/DeliveyPage.jsx'
import About from './components/About.jsx'

const router = createBrowserRouter ([

  {path: '/',
    element: <App />
  },

  {path: '/deliverypage',
    element: <DeliveryPage />
  },

  {path: '/about',
    element: <About />

  }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    
  </RouterProvider>
)
