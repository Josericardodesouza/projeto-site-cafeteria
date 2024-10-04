import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import DeliveryPage from './components/DeliveryPage.jsx'
import About from './components/About.jsx'
import MenuCofee from './components/MenuCoffee.jsx'
import MenuCandy from './components/MenuCandy.jsx'
import SendPage from './components/SendPage.jsx'
import MenuColdDrinks from './components/MenuColdDrinks.jsx'


const router = createBrowserRouter ([

  {path: '/',
    element: <App />
  },

  {path: '/deliveryPage',
    element: <DeliveryPage />
  },

  {path: '/about',
    element: <About />
  },

  {path: '/menucoffee',
    element: <MenuCofee />
  },

  {path: '/menucolddrinks',
    element: <MenuColdDrinks />
  },

  {path: '/menucandy',
    element: <MenuCandy />
  },

  {path: '/sendPage',
    element: < SendPage/>
  }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    
  </RouterProvider>
)
