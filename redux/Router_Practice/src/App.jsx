import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
// import SideBar from './components/SideBar';
import "bootstrap/dist/css/bootstrap.min.css";
import {Products} from "./pages/Products"
import './App.css'
import {BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
// import Home, { datafetching } from './pages/Home';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Layout from './components/Layout';
import Detail, { datafetchingbyId } from './pages/Detail';
import AddNewProduct from './pages/AddNewProduct';
import CartPage from './pages/cartPage';

// 2nd Way of Routing

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children:[
//       {path: "/", element: <Home Products={Products}/>},
//       {path: "/about", element: <About/>},
//       {path: "/contact",element: <Contact/>},
//       {path:'/detail/:slugtitle', element:<Detail/>}
//     ]
//   },
// ])


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      {/* <Route index element={<Home/>} loader={datafetching}/> */}
      <Route index element={<Home Product={Products}/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/detail/:id' element={<Detail/>} loader={datafetchingbyId}/>
      <Route path='/addNewProduct' element={<AddNewProduct/>} />
      <Route path='/cartPage' element={<CartPage/>} />
    </Route>
    )
  )
  return (
    <div>

      {/* Simple Way 1st */}


      {/* 2nd way */}

      <RouterProvider router = {router}/>
      
      
    </div>
  )
}

export default App
