import React from 'react'
import { paths } from '../../../routes/paths'
import { Link } from 'react-router-dom';
import { useMyContext } from '../../../context/Action';

export default function ProtectedActions() {
  const { userDetailes } = useMyContext();
  console.log(userDetailes)
  return (
    <div className='flex gap-4 items-center'>
      <span className='text-sky-900'>{userDetailes?.fullname ?? ""}</span>
      <Link to={paths.HOME_PAGE} className="px-3 py-2 flex items-center text-white bg-sky-400 hover:bg-sky-700">Logout</Link>
    </div>
  )
}
