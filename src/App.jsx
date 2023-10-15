import "./Style.scss"
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Router } from './Router.jsx'
const router = createBrowserRouter(Router)
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
