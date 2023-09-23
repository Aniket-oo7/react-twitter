import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope, faHashtag,faBell,faBookmark,faUser,faCircleDot,} from '@fortawesome/free-solid-svg-icons'
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeIcon from "@mui/icons-material/Home";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ProfileButton from "./profileButton";
import TweetPost from "../TweetSection/tweetPost";
import { GrFormClose } from "react-icons/gr";
import { useNavigate } from "react-router";
import { AiOutlineTwitter } from "react-icons/ai";
import style from './sideBar.module.css'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";


function SideBar(){

  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };
    const navigate = useNavigate();
    return(
      <div className={style.fullview}>
        
        <div className={style.sideBarMain}>
         <AiOutlineTwitter className={style.twitterLogo}/>
         <div className={style.sideBarOptions}>
        <HomeIcon/> <a>Home</a>
         </div>
         <div className={style.sideBarOptions}>
        <TagIcon/> <a>Explore</a>
         </div>
         <div className={style.sideBarOptions}>
        <NotificationsIcon/> <a>Notifications</a>
         </div>
         <div className={style.sideBarOptions}>
        <MailOutlineIcon/> <a>Messages</a>
         </div>
         <div className={style.sideBarOptions}>
        <BookmarkBorderIcon/> <a>Bookmarks</a>
         </div>
         <div className={style.sideBarOptions}>
        <PersonOutlineIcon/> <a>Profile</a>
         </div>
         <div className={style.sideBarOptions}>
        <MoreHorizIcon/> <a>More</a>
         </div>

        <Button
        variant="contained"
        sx={{borderRadius:'25px',width:'15%'}}
        onClick={handleClickOpen}>
          Tweet
        </Button>
        <ProfileButton/>

        <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          <Button onClick={handleClose}>
            <GrFormClose fontSize={30} />
          </Button>
        </DialogTitle>
        <DialogContent>
          <Box
            noValidate
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              m: "auto",
              width: "fit-content",
            }}
          >
            <TweetPost />
          </Box>
        </DialogContent>
      </Dialog>
        </div>
        </div>
    )
}

export default SideBar;