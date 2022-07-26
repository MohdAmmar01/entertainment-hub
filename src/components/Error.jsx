import React from 'react'
import { useNavigate } from 'react-router-dom'
function Error() {
  const navigate = useNavigate()
  return (
    <>
      <div className='error'>
        <div className='txt'>
          OOPS,PAGE NOT FOUND
        </div>
        <button onClick={navigate('/')} className='red'>BACK TO HOME</button>

      </div>
    </>
  )
}

export default Error