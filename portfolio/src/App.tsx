import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider,
} from 'react-router-dom'
import RootLayout from "./layouts/RootLayout"
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import About from "./pages/About"
import Goals from "./pages/Goals"
import './App.css'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/goals' element={<Goals/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
