import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  return (
    <>
      <div className='heading'>
        <div className='ent'>ENTERTAINMENT HUB</div>
      </div>
      <div className='hrz'></div>
    </>
  )
}

export default Header