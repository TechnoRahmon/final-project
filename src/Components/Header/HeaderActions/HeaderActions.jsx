import React from 'react'
import ProtectedActions from './ProtectedActions'
import Actions from './Actions'
import { useMyContext } from '../../../context/Action'

export default function HeaderActions() {
  const { isAuthendticated } = useMyContext();
  
  let content = <Actions/>

  if ( isAuthendticated ) { 
    content= <ProtectedActions />
  }

  return (
    <div className='flex gap-3'>
      {content}
    </div>
  )
}
