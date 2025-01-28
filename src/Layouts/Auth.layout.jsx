import React from 'react'
import auth from "../assets/auth.png"
import { Outlet } from 'react-router-dom'
export default function AuthLayout() {
  return (
    <section>

        <div className='grid grid-cols-12  '>
            <div className='hidden md:block md:col-span-7 '>
                <img src={auth} alt="auth-image" loading='lazy' className='h-[99vh] w-full' />
            </div>
            <div className='col-span-12 md:col-span-5'>
                <Outlet/>
            </div>
        </div>
      
    </section>
  )
}
