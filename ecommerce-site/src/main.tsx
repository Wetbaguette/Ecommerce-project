import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Products from './Products.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import Home from './routes/Home.tsx'
import BuildBox from './routes/BuildBox.tsx'
import Catalogue from './routes/Catalogue.tsx'
import Requests from './routes/Requests.tsx'
import Catering from './routes/Catering.tsx'
import GiftCards from './routes/GiftCards.tsx'
import Story from './routes/Story.tsx'
import Contact from './routes/Contact.tsx'
import FAQ from './routes/FAQ.tsx'
import Cookies from './routes/Cookies.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/build-a-box',
        element: <BuildBox />
      },
      {
        path: '/cookie-catalogue',
        element: <Catalogue />
      }, 
      {
        path: "/custom-requests",
        element: <Requests />
      },
      {
        path: "/catering",
        element: <Catering />
      }, 
      {
        path: "/gift-cards",
        element: <GiftCards />
      },
      {
        path: "/our-story",
        element: <Story />
      },
      {
        path: "/contact-us",
        element: <Contact />
      },
      {
        path: "/faq",
        element: <FAQ />
      }
      
    ]
  }, {
    path: '/cookie-catalogue/products',
    element: <Products />,
    children: [
       {
        path: '/cookie-catalogue/products/:cookieId',
        element: <Cookies />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
