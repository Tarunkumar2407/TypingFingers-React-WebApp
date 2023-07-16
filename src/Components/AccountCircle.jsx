import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { AppBar, Box, Modal, Tabs } from '@mui/material';
import { Tab } from '@mui/material';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useTheme } from '../Context/ThemeContext';
import GoogleButton from 'react-google-button';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../FirebaseConfiguration';
import ErrorMapping from '../Utils/ErrorMapping';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthState} from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';
const AccountCircle = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const {theme} = useTheme();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleModalOpen = () => {
        if(user){
            navigate("/user")
        }
        else{
            setOpen(true);
        }
    }

    const handleClose =() => {
        setOpen(false);
    }

    const handleValueChange = (e, v) => {
        setValue(v);
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider).then((res)=> {
            toast.success('Google login successful', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            handleClose();
        }).catch((err)=> {
            toast.error(ErrorMapping[err.code] || 'some error occured', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
    }

    const handleLogout = () => {
        auth.signOut().then((res) => {
                toast.success('Logout successful', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setOpen(true);
        }).catch((err) => {
                toast.error('Error in logging out', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        })
    }

  return (
    <div>
      <AccountCircleIcon fontSize='large' onClick={handleModalOpen} />

      {user && <LogoutIcon fontSize='large' onClick={handleLogout} />}

      <Modal
       open={open}
       onClose={handleClose}
       style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
       }}
      >
      <div style={{width:'400px', textAlign: 'center'}}>
        <AppBar position="static" style={{background: 'transparent'}}>
            <Tabs variant="fullWidth"
            value={value}
            onChange={handleValueChange}>
                <Tab label='login' style={{color: theme.textColor}}></Tab>
                <Tab label='signup' style={{color: theme.textColor}}></Tab>
            </Tabs>
        </AppBar>
        {value ===0 && <LoginForm handleClose={handleClose}/>}
        {value ===1 && <SignupForm handleClose={handleClose}/>}

        <Box>
            <span>OR</span>
            <GoogleButton 
                style={{width: '100%', marginTop: '12px' }}
                onClick={handleGoogleSignIn}
            />
        </Box>
      </div>
      </Modal>
    </div>
  )
}

export default AccountCircle
