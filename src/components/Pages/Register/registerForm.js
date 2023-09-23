import style from './register.module.css'
import {RxCross1} from 'react-icons/rx'
import {BsTwitter} from 'react-icons/bs'
import {TextField,
       Select, 
       MenuItem,
       Button, 
       FormControl,
       InputAdornment,
       InputLabel,
       IconButton,
       OutlinedInput} 
       from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
// import {Button} from './@mui/material'

function RegisterForm(){
    const[name,setName] = useState("")
    const[nameErr,setNameErr] = useState(false)
    const[phone,setPhone] = useState()
    const[phoneErr,setPhoneErr] = useState(false)
    
    const[emailErr,setEmailErr] = useState(false)
    const[password,setPassword] = useState('')
    const[passErr,setPassErr] = useState(false)
    const[getEmail,setGetEmail] = useState(false)
    const[showPassword,setShowPassword] = useState(false)
    const [month, setMonth] = useState("");
    const [day, setDay] = useState("");
    const [year, setYear] = useState("");
    const navigate = useNavigate();

    const allUserData = JSON.parse(localStorage.getItem("userData")) ?
     JSON.parse(localStorage.getItem("userData")) : []
    
    const months = 
    ["January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "November",
     "December"]

     const days =
     [1,2,3,4,5,6,7,8,9,10,
      11,12,13,14,15,16,17,18,19,20,
      21,22,23,24,25,26,27,28,29,30,31]
    
      const years = [
        "1998",
        "1999",
        "2000",
        "2001",
        "2002",
        "2003",
        "2004",
        "2005",
        "2006",
        "2007",
        "2008",
        "2009",
        "2010",
      ];
   
      const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    const phoneRegex =
      /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;
  
    const passRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  
    function handleswitchtoEmail(){
        setGetEmail(!getEmail)
        setPhoneErr(false)
        setEmailErr(false)
        setPhone("")
    }

        function handleNameChange(e){
      let  tempName = e.target.value
      setName(tempName)
      if(tempName.length < 3){
        setNameErr(true)
      } else{
        setNameErr(false)
      }
      
    }
    function handlePhoneChange(e){
     let tempPhone =e.target.value
     setPhone(tempPhone)
      if(!tempPhone.match(phoneRegex)){
         setPhoneErr(true)
      } else {
        setPhoneErr(false)
      }
    }

    function handleEmailChange(e){
      let tempEmail =e.target.value
     setPhone(tempEmail)
      if(!tempEmail.match(emailRegex)){
         setPhoneErr(true)
      } else {
        setPhoneErr(false)
      }
    }
    function handlePassChange(e){
      let tempPass = e.target.value
      setPassword(tempPass)
      if(!tempPass.match(passRegex)){
        setPassErr(true)
      } else {
        setPassErr(false)
      }
      setPassword(tempPass)
    }
    function handleClickShowPassword(){
      setShowPassword(!showPassword)
    }
    function loginIfYouRRegistered(){
      navigate("/login")
    }

// This function will validate all the inputs from user using regex and set's
//  the data to the local store in the form of array of objects named [userData]   
    function handleSubmitRegister(){
      let tempUserData = {
        name: name,
        phone: phone,
        pass: password
      }
     if(!name || !phone || !password){
         alert("Fill  All The Details First")
     } else {
           if(nameErr || emailErr || phoneErr || passErr){
                alert("Please Fill The Valid Credentials")
            }  
             else {
              localStorage.setItem("userData",JSON.stringify([...allUserData, tempUserData]))
            setName("" )
            setPhone("")
            setPassword("")
            setDay('')
            setMonth("")
            setYear('')
            alert("Registration SucessFull")
            navigate("/login")
        }
     }
      
    }
 
    
   
    return(
        <>

<div className={style.mainContainer}>
  <RxCross1
    className={style.crossButton}
    onClick={loginIfYouRRegistered}/>
      <BsTwitter size={"2.5em"} style={{color: "skyblue"}}/>
       <h2 style={{marginRight:'5rem'}}>Create Your Account.</h2>

{/* first input field           */}
<div className={style.firstDiv}>
      <TextField
         variant='outlined'
         sx={{width: '100%'}}
         value={name}
         label='Name'
         onChange={handleNameChange}/>

      <p className={style.nameField}>{nameErr ? "invalid data *" : " "}</p>
</div>
      
{/* second input field which is dynamic i.e based on ternary operating condition*/}
  <div className={style.firstDiv}>
        {!getEmail ? 
     <TextField 
           variant='outlined'
           sx={{width: '100%',marginBottom:'0.5px'}}
           value={phone}
           label='Phone'
           onChange={handlePhoneChange}/> :
     <TextField
           variant='outlined'
           sx={{width: '100%',marginBottom:'0.5px'}}
           value={phone}
           label='Email'
           onChange={handleEmailChange}/>
        }
     <p className={style.nameField}>
         {phoneErr ? "invalid data *" : ""}
               
               {/* This piece of code is providing alternate options to the user to select between email and Phone */}
     </p>  
       <span 
         onClick={handleswitchtoEmail}
         style={{color:'blue',fontWeight:'100px'}}>
         Use {getEmail ? "phone": "email"} instead
       </span>
  </div>
          
         <FormControl sx={{ mt: 2, width: "70%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              
              <OutlinedInput
                id="outlined-adornment-password"
                onChange={handlePassChange}
                value={password}
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
          <p className={style.nameField}>
               {passErr ? 
             <span 
               style={{fontFamily:"cursive"}}>
               Minimum eight characters, at least one uppercase &
               lowercase letter, one number & a special character{" "} 
             </span> : " "}
          </p>
  </FormControl>
         
        <div className={style.dateInfo}>
            <p style={{fontWeight:"500"}}>Date Of Birth</p>
            <span>
                This will not be shown publicly. Confirm your own age, 
                even if this account is for a business, a pet, or something else.
            </span>
        </div>

{/* //  Three Dropdowns for the Date of birth */}

  <div className={style.dropdown}>

      {/* Month Dropdown */}

      <div style={{ flexGrow: "3" }}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Month</InputLabel>
                <Select
                   labelId="demo-simple-select-label"
                   id="demo-simple-select"
                   value={month}
                   label="Month"
                   onChange={(e) => setMonth(e.target.value)}
                  sx={{ width: "100px",height: '45px' }}>
                     
                      {months.map((item, index) => (
                        <MenuItem key={index} value={item}>
                        {item}
                        </MenuItem>
                        ))
                      }
                  </Select>
                </FormControl>
      </div>
                   {/* Day Dropdown */}     
        
      <div style={{ flexGrow: "3" }}>
          <FormControl>
             <InputLabel id="demo-simple-select-label">Day</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={day}
                  label="Day"
                  onChange={(e) => setDay(e.target.value)}
                  sx={{ width: "100px",height: '45px' }}>

                       {days.map((item, index) => (
                        <MenuItem key={index} value={item}>
                         {item}
                       </MenuItem>
                       ))
                       }
                </Select>
           </FormControl>
      </div>
                      {/* Year Dropdown */}

      <div style={{ flexGrow: "3" }}>
        <FormControl>
           <InputLabel id="demo-simple-select-label">Year</InputLabel>
             <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={year}
                label="Year"
                onChange={(e) => setYear(e.target.value)}
                sx={{ width: "100px",height: '45px' }}>

                    {years.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        {item}
                      </MenuItem>
                      ))
                      }
             </Select>
         </FormControl>
        </div>
      </div>   
  
   <Button variant='contained'
        sx={{backgroundColor: 'black',width:'20rem',borderRadius:'20px',marginTop:'5px'}}
        onClick={handleSubmitRegister}>
         Register
   </Button>

</div>
</>
    )
}
export default RegisterForm;