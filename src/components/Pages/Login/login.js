import { json, useNavigate } from "react-router-dom";
import style from './login.module.css'
import { Button, TextField } from "@mui/material";
import {BsTwitter} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'
import {AiOutlineApple} from 'react-icons/ai'
import {RxCross1} from 'react-icons/rx'
import { useState } from "react";


export let data = ""

function Login(){
   
    const [input,setInput] = useState()
    const navigate = useNavigate()
    

    let fetchDataFromLST = JSON.parse(localStorage.getItem("userData")) ?
    JSON.parse(localStorage.getItem("userData")) : []
    
    const handleNextClick = (e) => {
        e.preventDefault()
       let validateData = fetchDataFromLST.find((user,index) => user.name === input || user.phone === input)
       if(validateData == undefined){
       alert("Invalid User Details")
       } else {
        data = input
        navigate("/loginMain")
       }
       
    }

    const loginCrossButton = () =>{
        navigate("/")
    }

    function googleLogin(){
        alert("Google Login")
       }
       function appleLogin(){
        alert("Apple Login")
       }
       const handleloginInput = (e) => {
        setInput(e.target.value)
       }
       const forgotPassword = () =>{
        alert('Please Create New Account With Valid Credentials')
       }
    return(
        <>
        <div className={style.main}>
        
        <RxCross1 className={style.crossButton}
        onClick={loginCrossButton}
        />          
          <BsTwitter size={"2.5em"} style={{color: "skyblue",marginBottom:'-1px'}}/>
          <h1 style={{marginTop:'-1px'}}>Sign In To Twitter.</h1>
          <Button variant ="outlined"
           sx={{
            display: "flex",
            justifyContent: "centre",
            alignItems: "centre",
            width: "63%",
            height: "4.1em",
            gap: "1.2rem",
            border: "1px solid black",
            borderRadius: '35px',
            color: "black"
           }}
           onClick={googleLogin}
           >
          {<FcGoogle size={30} />}{' '} 
            <p> Sign in with Google</p>
          </Button>
          <Button variant ="outlined"
           sx={{
            display: "flex",
            justifyContent: "centre",
            alignItems: "centre",
            width: "63%",
            height: "4em",
            gap: "1.6rem",
            border: "1px solid black",
            borderRadius: '35px',
            color: "black"

           }}
           onClick={appleLogin}>
          {<AiOutlineApple size={33} color='black'/>}{' '} 
            <p> Sign in with Apple</p>
          </Button>
          
               ----------- Or ------------  
           <TextField
            value={input}
            label="Phone,Name or email"
            onChange={handleloginInput}
            sx={{width:'65%'}}>

            </TextField>
            <Button variant='contained'
        sx={{backgroundColor: 'black',width:'20rem',borderRadius:'20px',marginTop:'5px'}}
        onClick={handleNextClick}>
         Next
   </Button>

            <Button variant ="outlined"
           sx={{
            display: "flex",
            justifyContent: "centre",
            alignItems: "centre",
            width: "64%",
            height: "3em",
            border: "1px solid black",
            borderRadius: '35px',
            color: "black"
           }}
           onClick={forgotPassword}
           >
            <strong>Forget Password</strong>
          </Button>
          <span>Don't have an account?  <a href="/signup"> SignUp</a></span>
          </div>
          </>
    )
    
}

export default Login;