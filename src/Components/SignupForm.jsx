import { Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "../Context/ThemeContext";
import { auth } from "../FirebaseConfiguration";
import { toast } from "react-toastify";
import ErrorMapping from "../Utils/ErrorMapping";


const SignupForm = ({handleClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const {theme} = useTheme();

  const handleSubmit = () => {
    if(!email || !password || !confirmPassword){
        toast.warning('All details are mandatory', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            return;
    }
    if(password !== confirmPassword) {
        toast.warning('Password mis-matching', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            return;
    }
    auth.createUserWithEmailAndPassword(email, password).then((res)=> {
        toast.success("User's Account Created", {
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
  return (
    <Box
      p={3}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <TextField
           variant="outlined"
           type="email"
           label="Enter Email"
           onChange={(e) => setEmail(e.target.value)}
           InputLabelProps={{
            style: {
                color: theme.textColor
            }
           }}
           InputProps={{
            style: {
                color: theme.textColor
            }
           }}
      />
      <TextField
           variant="outlined"
           type="password"
           label="Enter Password"
           onChange={(e) => setPassword(e.target.value)}
           InputLabelProps={{
            style: {
                color: theme.textColor
            }
           }}
           InputProps={{
            style: {
                color: theme.textColor
            }
           }}
      />
       <TextField
           variant="outlined"
           type="password"
           label="Enter Confirm Password"
           onChange={(e) => setConfirmPassword(e.target.value)}
           InputLabelProps={{
            style: {
                color: theme.textColor
            }
           }}
           InputProps={{
            style: {
                color: theme.textColor
            }
           }}
      />
      <Button 
           onClick={handleSubmit}
           variant="contained" 
           size="large"
           style={{background: theme.textColor, color: theme.background}}>
           SignUp
      </Button>
    </Box>
  );
};

export default SignupForm;
