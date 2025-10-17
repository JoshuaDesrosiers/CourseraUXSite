import './App.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'

function Footer() {
  const Nav ={'Home':''}

  return (
    <>
      <div className='acrylic-box flex p-2 m-2 mb-8 justify-center text-black'>
          <a className='underline text-blue-500 opacity-50 p-2 hover:opacity-100 duration-200'>LinkedIn</a><p className='p-2'>|</p>
          <a className='underline text-blue-500 opacity-50 p-2 hover:opacity-100 duration-200'>CodexARS</a><p className='p-2'>|</p>
          <a className='underline text-blue-500 opacity-50 p-2 hover:opacity-100 duration-200'>Email</a>
      </div>
    </>
  )
}

export default Footer
