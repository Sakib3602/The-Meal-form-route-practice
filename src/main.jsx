import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LogIn from './components/LogIn';
import MainTab from './components/MainTab';
import Meal from './components/Meal';
import MealDetail from './components/MealDetail';




const router = createBrowserRouter([
  {
    path: '/',
    element:<LogIn></LogIn>
  },
  {
    path: '/tabs',
    element: <MainTab></MainTab>
  },
  {
    path: '/meals',
    element: <Meal></Meal>,
    loader: ()=> fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a'),
  },
  {
    path: '/detail/:detailId',
    element: <MealDetail></MealDetail>,
    loader: ({params})=> fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.detailId}`)
  },

 
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
