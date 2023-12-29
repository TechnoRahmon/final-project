import React from 'react'
import { paths } from '../../../routes/paths'
import { Link } from 'react-router-dom';

export default function Actions() {
  return (
    <Link to={paths.LOGIN_PAGE} className="px-3 flex items-center text-white bg-sky-400 hover:bg-sky-700">Login</Link>
  )
}
