import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DeliveryPage from './components/DeliveryPage.jsx'
import About from './components/About.jsx'
import MenuCofee from './components/MenuCoffee.jsx'
import MenuCandy from './components/MenuCandy.jsx'
import SendPage from './components/SendPage.jsx'
import MenuColdDrinks from './components/MenuColdDrinks.jsx'
import UserAdressProvider from './context/UserAdressProvider.jsx'
import UserNameProvider from './context/UserNameProvider.jsx'
import MenuItems from './components/MenuItems.jsx'


import CommentProvider from './context/CommentProvider.jsx'
import UserComment from './components/UserComment.jsx'
import UserNameDisplay from './components/UserNameDisplay.jsx'
import RatingStars from './components/RatingStars.jsx'
import RatingNoteProvider from './context/RatingNoteProvider.jsx'
import SelectedItemsProvider from './context/SelectedItemsProvider.jsx'
import { SelectedItemsContext } from './context/SelectedItemsContext.jsx'
import QuantItemsSelectedsProvider from './context/QuantItemsSelectedsProvider.jsx'
import Confirmation from './components/Confirmation.jsx'
import TotalValueProvider from './context/TotalValueProvider.jsx'
import Comments from './components/Comments.jsx'



const router = createBrowserRouter([

  {
    path: '/',
    element: 
    <UserNameProvider>
      <CommentProvider>
        <RatingNoteProvider>
          <SelectedItemsProvider>
          <App />
          </SelectedItemsProvider>
        </RatingNoteProvider>
      </CommentProvider>
    </UserNameProvider>


  },

  {
    path: '/deliveryPage',
    element: (
      <UserAdressProvider>
        <UserNameProvider>
          <SelectedItemsProvider>
            <QuantItemsSelectedsProvider>
              <TotalValueProvider>
               <DeliveryPage />
              </TotalValueProvider>
            </QuantItemsSelectedsProvider>
          </SelectedItemsProvider>
        </UserNameProvider>
      </UserAdressProvider>

    )
  },

  {
    path: '/about',
    element: <About />
  },

  {
    path: '/menucoffee',
    element: <MenuCofee />
  },

  {
    path: '/menucolddrinks',
    element: <MenuColdDrinks />
  },

  {
    path: '/menucandy',
    element: <MenuCandy />
  },


  {
    path: '/confirmation',
     element: 
     
     <UserAdressProvider>
      <UserNameProvider>
        <TotalValueProvider>
          <QuantItemsSelectedsProvider>
            <Confirmation />
          </QuantItemsSelectedsProvider>
        </TotalValueProvider>
      </UserNameProvider>
     </UserAdressProvider>
    
    
    //

  },


  {
    path: '/sendpage',
    element: (
      <UserAdressProvider>
        <UserNameProvider>
          <CommentProvider>
            <RatingNoteProvider>
              <SelectedItemsProvider>
                <QuantItemsSelectedsProvider>
                  <RatingNoteProvider>
                  
                      <SendPage />
                   
                  </RatingNoteProvider>
                </QuantItemsSelectedsProvider>
              </SelectedItemsProvider>
            </RatingNoteProvider>
          </CommentProvider>
        </UserNameProvider>
      </UserAdressProvider>

    )

  },

  // {
  //   path: '/evaluations',
  //   element: (

  //     <UserNameProvider>
  //       <CommentProvider>
  //         <Evaluations />
  //       </CommentProvider>
  //     </UserNameProvider>

  //   )



  // },

  {
    path: '/userComment',
    element: (
    <CommentProvider>
         <UserComment />
    </CommentProvider>

    )
  },


    {
      path: '/userNameDisplay',
      element: 
      <UserNameProvider>
        <UserNameDisplay />
      </UserNameProvider>

    },

    {
      path: '/ratingStars',
      element:
      <RatingNoteProvider>
        <RatingStars />
      </RatingNoteProvider>
 
    },

    {

    path: '/menuitems', 
    element: 
       <SelectedItemsProvider>
        <QuantItemsSelectedsProvider>
        <MenuItems />
        </QuantItemsSelectedsProvider>
       </SelectedItemsProvider>
 

    },

    {

    path: '/menuitemscontext',
    element:
      <SelectedItemsProvider>
          <SelectedItemsContext />
      </SelectedItemsProvider>

    },

    {
      path: '/comments',
      element:
      <UserNameProvider>
        <CommentProvider>
          <RatingNoteProvider>
         
              <Comments />
         
          </RatingNoteProvider>
        </CommentProvider>
      </UserNameProvider>
    },



    
   


  

  // {
  //   path: '/userCommentDisplay',
  //   element:

  //     <UserCommentDisplay />

  // }

])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>

  </RouterProvider>
)
