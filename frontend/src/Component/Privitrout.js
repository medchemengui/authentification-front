import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { login } from '../redux/Action/Action'

function Privitrout({children}) {
    const token=localStorage.getItem("token")
    const[usertoken,setUsertoken]= useState('')
    const dispatch=useDispatch()
  useEffect(() => {
    
  
    
  }, [])
  
    console.log(usertoken)
  return (
    <div>
      {token? children:<Navigate to="/"/>}
    </div>
  )
}

export default Privitrout
