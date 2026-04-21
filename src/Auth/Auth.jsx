import React, { useContext, useState } from 'react'
import Loging from '../Components/Loging'
import Register from '../Components/Register'


const Auth = () => {
    const [toggle, settoogle] = useState(false)
    
  return (
    <div>
        {
            toggle ? <Loging settoogle={settoogle} /> : <Register settoogle={settoogle}/>
        }

    </div>
  )
}

export default Auth