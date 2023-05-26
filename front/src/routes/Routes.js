import React from 'react'
import Home from "../pages/Home";
import Add from "../pages/Add";
import Detail from "../pages/Deatil";
import MainRoot from '../pages/MainRoot';
export const ROUTER = [
     {
          path:'/',
          element:<MainRoot/>,
          children:[
               {
                     path:'home',
                     element:<Home/>
               },
               {
                    path:'add',
                    element:<Add/>
               },
               {
                    path:'detail/:id',
                    element:<Detail/>
               }
          ]
     }
]

export default Routes




















/*

import Add from "../Pages/Add";
import Detail from "../Pages/Detail";
import Home from "../Pages/Home";
import Mainroot from "../Pages/Mainroot";

export const ROUTER = [
     {
          path:'/',
          element:<Mainroot/>,
          children:[
               {
                    path:'home',
                    element:<Home/>
               },
               {
                    path:'add',
                    element:<Add/>
               },
               {
                    path:'detail/:id',
                    element:<Detail/>
               }
          ]
     }
]
 */