import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import Detail from "./pages/Deatil";
import MainRoot from './pages/MainRoot';
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
const routes = createBrowserRouter(ROUTER)
function App() {
 
  return (
    <>
        <RouterProvider router = {routes} />
    </>
  )
}

export default App
