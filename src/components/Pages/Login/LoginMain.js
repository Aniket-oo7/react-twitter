import { data } from "./login";
import style from './login.module.css'
import { json, useNavigate } from "react-router-dom";
import {RxCross1} from 'react-icons/rx'
import {TextField,
  Button, 
  FormControl,
  InputAdornment,
  InputLabel,
  IconButton,
  OutlinedInput,
  Input} 
  from '@mui/material';
import { useState } from "react";
import {BsTwitter} from 'react-icons/bs'
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { loginOrLogOutSlice } from "../../../ReduxData/ReduxStore";
import {useDispatch, useSelector} from 'react-redux'

function LoginMain(){
    const [inputPass, setInputPass] = useState("")
    const [showPassword,setShowPassword] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
   

    
    let getData = JSON.parse(localStorage.getItem("userData")) ?
      JSON.parse(localStorage.getItem("userData")) : [] ;

     const handleClickShowPassword = () => {
      setShowPassword(!showPassword)
     }
      
     const forgotPassWord = () => {
      alert("It's not Possible to login without Password")
     }
    const loginSecurity = (e) => {
      e.preventDefault()
      let checkAvailablity = getData.find((user,index) => user.pass === inputPass)
      if(checkAvailablity === undefined){
        alert("User Not Exist Or Password Does Not Matched")
      } else {
        dispatch(loginOrLogOutSlice.actions.userLogin({phone:data, pass:inputPass}))
        alert("Login Sucessfull")
        navigate("/")
      }
   }

    const goToHomePage = () => {
        navigate("/")
    }
    
    const getPasswordFromUser = (e) => {
        setInputPass(e.target.value)
    }
    return(
        <>
        {/*  This is the main conatiner */}
        <div className={style.main}>

            {/* cross button to change the page */}
        <RxCross1
         className={style.crossButton}
         onClick={goToHomePage}/>

         {/* Twitter Heading */}
         <BsTwitter size={"2.5em"} style={{color: "skyblue",marginBottom:'-1px'}}/>
       <h1>Enter Your Password</h1>

         {/* existing data from first login Page */}
        <TextField
        label="Phone,Name or Email"
        margin="normal"
        type="outlined"
        value={data}
        disabled
        sx={{width:'65%',
             height:'3.8rem'
             }}>
        </TextField>
  
  {/*Input Field For password */}
  <FormControl sx={{ width: "65%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              
              <OutlinedInput
                id="outlined-adornment-password"
                onChange={getPasswordFromUser}
                value={inputPass}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      
                      edge="end"
                    >
                      {showPassword ? <Visibility /> :<VisibilityOff /> }
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
          
  </FormControl>
  

{/* Login Button */}
       <Button 
       variant="contained"
       sx={{
           width:"52%",
           height:'3rem', 
           margin:'normal',
           borderRadius:"20px",
           color:'white',
           backgroundColor:"black"}}
           onClick={loginSecurity}>
              Login
        </Button>

{/* Forget Password Section */}
        <a href="#" onClick={forgotPassWord}>Forget Password </a>
        </div>
        </>
    ) 
}
export default LoginMain;