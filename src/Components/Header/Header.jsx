import React from 'react'
import { Navigation } from './Navigation'
import HeaderActions from './HeaderActions/HeaderActions'

export default function Header() {
  return (
    <div className='flex justify-between px-4 py-2 fixed top-0 left-0 w-full bg-white'>
        <Navigation />
        <HeaderActions />
    </div>
  )
}
