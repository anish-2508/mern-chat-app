import React from 'react'
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogOut from '../../hooks/useLogOut';


const LogOutButton = () => {

  const {loading, logout} = useLogOut()

  return (
    <div className='mt-auto'>
      {!loading ? (
          <RiLogoutBoxLine className='w-6 h-6 text-white cursor-pointer' onClick={logout}/>
      ) : (<span className='loading loading-spinner'></span>)}

    </div>
  )
}

export default LogOutButton
