import React, { useEffect } from 'react'
import { BsFacebook } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getCurrent, get_current } from '../redux/Action/Action';
import './Profile.css'

function Profile() {
  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getCurrent())
  }, [dispatch])
  const user=useSelector((state)=>state.Reducer.user)
  return (
    <div>
    {user?.email?.length!=0?

    <div className='test'>
    <aside className="profile-card">
      <header>
        {/* here’s the avatar */}
        <a target="_blank" href="#">
          <img src="" className="hoverZoomLink" />
        </a>
        {/* the username */}
        <h1>
        {user.email}
        </h1>
        {/* and role or location */}
        <h2>
          Better Visuals
        </h2>
      </header>
      {/* bit of a bio; who are you? */}
      <div className="profile-bio">
        <p>
          It takes monumental improvement for us to change how we live our lives. Design is the way we access that improvement.
        </p>
      </div>
      {/* some social links to show off */}
      <ul className="profile-social-links">
        <li>
          
           
           <BsFacebook/>
          
        </li>
        <li>
          <a target="_blank" href="https://twitter.com/dropyourbass">
            <i className="fa fa-twitter" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/vipulsaxena">
            <i className="fa fa-github" />
          </a>
        </li>
        <li>
          <a target="_blank" href="https://www.behance.net/vipulsaxena">
            <i className="fa fa-behance" />
          </a>
        </li>
      </ul>
    </aside>
  </div>:<h1>happy hacking</h1>}
  </div>
    
  )
}

export default Profile
