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
import UserAdressProvider from './context/UserAdressProvider.jsx'
import UserNameProvider from './context/UserNameProvider.jsx'


const router = createBrowserRouter ([

  {path: '/',
    element: 
    <UserNameProvider>
        <App />
    </UserNameProvider>
    
  
  },

  {path: '/deliveryPage',
    element: 
    <UserAdressProvider>
      <UserNameProvider>
      <DeliveryPage />
      </UserNameProvider>
    </UserAdressProvider>
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
    element: 
    <UserAdressProvider>
     <UserNameProvider>
      <SendPage />
     </UserNameProvider>
    </UserAdressProvider>

  }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    
  </RouterProvider>
)
