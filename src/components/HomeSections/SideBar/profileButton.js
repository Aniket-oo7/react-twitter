import { useEffect, useState } from "react"
import { Avatar, Popover, Button} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { red } from "@mui/material/colors";
import style from './profileButton.module.css'
import {useNavigate} from 'react-router'
import {useDispatch} from 'react-redux'
import { loginOrLogOutSlice } from "../../../ReduxData/ReduxStore";


function ProfileButton(){
    const [name,setName] = useState("Guest")
    const [phone,setPhone] = useState(1111111111)
    const [anchorE1,setAnchorE1] = useState(null)
    const userLoginData = JSON.parse(localStorage.getItem("loginUserDetails"))
    const localUserData =JSON.parse(localStorage.getItem("userData"))
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
       const tempData = localUserData.find((item) =>
        (item.name == userLoginData.phone || item.phone == userLoginData.phone) && item.pass == userLoginData.pass
        )
        if(tempData != undefined){
            setName(tempData.name)
            setPhone(tempData.phone)
        } else{
            setName("Guest")
            setPhone("")
        }
    },[])    
    
    function handleUserLoginLogout(event){
        setAnchorE1(event.currentTarget)
    }

    const open = Boolean(anchorE1)
    const id = open ? "simple-popover" : undefined

     function handleClose(){
       setAnchorE1(null)
    }

    function handleLogOut(){
    dispatch(loginOrLogOutSlice.actions.userLogout())
    alert("Logout Sucessfully")
    navigate('/login')  
    }
    return(
        <>
        <div>
        <button className={style.profileButton}
        onClick={handleUserLoginLogout}>
        
        <div className={style.profileDetails}>
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
           { name[0]}
        </Avatar>   
        </div>
        <div className={style.staticProfile}>

            <div className={style.profileNameandPhone}>
            <div>{name}</div>
            <div>{phone}</div>
            </div>

            <div className={style.moreIcon}>
              <MoreVertIcon/>
            </div>
        </div>
        
        
      
        </button>
        
        <Popover
        id={id}
        open={open}
        anchorEl={anchorE1}
        onClose={handleClose}
        // anchorReference="anchorPosition"
        // anchorPosition={{ top: 540, left: 100 }}
        anchorOrigin={{
          vertical:"bottom",
          horizontal: 'left'
        }}
        sx={{ marginBottom: "300px" }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Button
            // aria-describedby={id}
            variant="outline"
            onClick={() => navigate("/signup")}
          >
            {" "}
            Add an existing account
          </Button>
          <Button
            // aria-describedby={id}
            variant="outline"
            onClick={() => handleLogOut()}
          >
            {" "}
            Log Out
          </Button>
        </div>
      </Popover>
        </div>
        </>
    )
}
export default ProfileButton;