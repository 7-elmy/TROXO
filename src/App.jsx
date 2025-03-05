import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/Main.layout'
import Home from './Components/Home/Home'
import { useTranslation } from 'react-i18next'
import TermsConditions from './Components/Terms/Terms'
import Privacy from './Components/Privacy/Privacy'
import ContactUs from './Components/ContactUs/ContactUs'
import Blog from './Components/Blog/Blog'
import AuthLayout from './Layouts/Auth.layout'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import AboutUs from './Components/About-Us/About-Us'
import Question from './Components/Questions/Question'

function App() {
  const  [i18n]= useTranslation()
  let router = createBrowserRouter([
    {path:"/" ,element:<MainLayout/> , children:[
    {index:true,element:<Home/>},
    {path:"home",element:<Home/>},
    {path:"/term&Condition",element:<TermsConditions/>},
    {path:"/privacy",element:<Privacy/>},
    {path:"/contact-us",element:<ContactUs/>},
    {path:"/blog",element:<Blog/>},
    {path:"/about-us",element:<AboutUs/>},
    {path:"/FAQ",element:<Question/>},
    ]},
    {path:"/auth/", element:<AuthLayout/> , children:[
      {index:true , element:<Login/>},
      {path:"register" , element:<Register/>},
    ]}
  ])

  return (
    <div className='' dir={i18n.language ==="ar"? "rtl":"ltr"}>
   <RouterProvider router={router}/>
    </div>
  )
}

export default App
