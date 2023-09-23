import {BsTwitter} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineApple} from 'react-icons/ai'
import {Button} from '@mui/material'
import style from './register.module.css'
import { useState } from 'react'
import RegisterForm from './registerForm'
import { RxCross1 } from 'react-icons/rx'
import { useNavigate } from 'react-router-dom'
function Register(){
   const[register,setRegister] = useState(false)
   const navigate = useNavigate();

   function registerCrossbutton(){
    navigate('/')
   } 
   function googleLogin(){
    alert("Google Login")
   }
   function appleLogin(){
    alert("Apple Login")
   }
   function termsStatus(){
    alert("Terms Accepted")
   }
   function privacyStatus(){
    alert("Privacy Accepted")
   }
   function cookieStatus(){
    alert("Cookie Granted")
   }
   function registerNewUSer(){
    setRegister("true")
   }
   if(!register){
    return(
        <>
{/* Main Container */}
        <div className={style.main}>

{/* Cross Button */}
        <RxCross1 
        className={style.crossButton}
        onClick={registerCrossbutton}/>

{/* Twitter Heading */}
          <div>
          <BsTwitter size={"2.5em"} style={{color: "skyblue",marginTop:'-1px'}}/>
          </div>
          <h1 style={{marginTop:'-1px', marginBottom:'-1px'}}>Join Twitter Today.</h1>
         
{/* Login with Google Button   */}
          <Button variant ="outlined"
           sx={{
            display: "flex",
            justifyContent: "centre",
            alignItems: "centre",
            width: "66%",
            height: "4.1em",
            gap: "1.5rem",
            border: "1px solid black",
            borderRadius: '35px',
            color: "black",
            marginTop:'0.5rem'
           }}
           onClick={googleLogin}
           >
          {<FcGoogle size={30} />}{' '} 
            <p> Sign in with Google</p>
          </Button>

{/* Login with Apple Button   */}          
          <Button variant ="outlined"
           sx={{
            display: "flex",
            justifyContent: "centre",
            alignItems: "centre",
            width: "64%",
            height: "3.9em",
            gap: "1.6rem",
            border: "1px solid black",
            borderRadius: '35px',
            color: "black",
            marginTop:'0.6em'
           }}
           onClick={appleLogin}>
          {<AiOutlineApple size={33} color='black'/>}{' '} 
            <p> Sign in with Apple</p>
          </Button>
            <div>
               ----------- Or ------------  
            </div>

{/* Create Account             */}
            <Button variant ="contained"
            sx={{ display: "flex",
                  justifyContent: "centre",
                  alignItems: "centre",
                  width: "62%" ,
                  height: "3.6em",
                  backgroundColor: "black",
                  borderRadius: "30px",
                  padding: "0.6rem" 
               }}
           onClick={registerNewUSer}>
           Create Account
          </Button>

{/* Regisration Description           */}
           <div className={style.registerDescription}>
             <p> By Signing Up You Agree To The 
            <a href='#'
            onClick={termsStatus}>Terms Of Services</a>
            <br/> and
            <a href='#'
            onClick={privacyStatus}> Privacy Policy</a>
            
            , including
            <a href='#' 
            onClick={cookieStatus}> Use Cookies</a>
            </p>
            <p>Already had an Account <a href="/login">Login</a></p>
           </div>
        </div>
        </>
    )
  } else {
    return(
        <>
        <RegisterForm />
        </>
    )
  }
}

export default Register;
