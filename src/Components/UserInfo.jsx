import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../FirebaseConfiguration'
import { AccountCircle } from '@mui/icons-material';

const UserInfo = ({totalTestsTaken}) => {
    const [user] = useAuthState(auth);
  return (
    <div className='user-profile'>
       <div className='user'>
          <div className='picture'>
               <AccountCircle style={{display: 'block', transform: 'scale(6)', margin: 'auto', marginTop: '3.5rem'}}/>
          </div>
          <div className='info'>
              <div className='email'>
                  {user.email}
              </div>
              <div className='joined-at'>
                  {user.metadata.creationTime}
              </div>
          </div>
       </div>
       <div className='total-tests'>
            <span>Total Tests Taken- {totalTestsTaken}</span>
       </div> 
    </div>
  )
}

export default UserInfo
