import { Avatar, Dialog, IconButton} from '@mui/material';
import React, { useState, useRef } from "react";
import { Photo, Gif, Poll, EmojiEmotions, Schedule } from "@mui/icons-material";
// import EmojiPicker from "react-emoji-picker";
import { useDispatch } from "react-redux";
// import { tweetDataSlice } from "../../assets/redux/ReduxData";
import { red } from "@mui/material/colors";
import { useSelector } from 'react-redux';
import styles from './tweetPost.module.css'

function TweetPost(){

   const [mediaFile, setMediaFile] = useState(null);
  const [tweets, setTweets] = useState([]);
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [image, setImage] = useState(null);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const tweetsArr = useSelector((state) => state.tweetData.tweets)


  // this is the function to select image for tweet box 
  const handleMediaUpload = (event) => {
    setMediaFile(event.target.files[0]);
  };

  // whats Happening function 
  const handleInputChange = (event) => {
    setMessage(event.target.value);
  }; 

    const handleUploadClick = (e) => {
    e.preventDefault();
    if (message != "") {
      // dispatch(tweetDataSlice.actions.addNewTweet(message));
      setMessage("");
      console.log(tweetsArr)
    } else {
      alert("Please write what you have to tweet.");
    }
  };

    return(
     
    <div className={styles.twitterui}>
  {/* FIrst child of twitterui     */}
      <div className={styles.leftpanel}>
        <Avatar
          sx={{ bgcolor: red[500] }}
          alt="Travis Howard"
          src="/static/images/avatar/2.jpg"
        >
          {"Tw"}
        </Avatar>
      </div>
  
 {/* second children      */}
      <div className={styles.maincontent}>

  {/* children to the second children and first grandchildren to the first */}
       
       {/* this is sibling 1 */}
        <div contentEditable={true} />

 {/* sibling 2 of 2nd children    i.e what's happening input field  */}
        <div className={styles.whatshappening}>
          <textarea
            placeholder="What's happening?"
            value={message + (selectedEmoji ? selectedEmoji : "")}
            onChange={handleInputChange}
            style={{
              border: "none",
              resize: "none",
              width: "100%",
              height: "100px",
            }}
          />
        

 {/* sibling three of 2nd children    i.e optionContainer below the tweet box          */}
          <div className={styles.iconlist}>

   {/* icons in icons list           */}
            <div>
              <label htmlFor="media-upload">
                <input
                  id="media-upload"
                  type="file"
                  accept="image/"
                  onChange={handleMediaUpload}
                  style={{ display: "none" }}
                />
                <IconButton component="span" style={{ color: "#1DA1F2" }}>
                  <Photo />
                </IconButton>
              </label>
              <IconButton style={{ color: " #1DA1F2" }}>
                <Gif />
              </IconButton>
              <IconButton style={{ color: " #1DA1F2" }}>
                <Poll />
              </IconButton>
              <IconButton style={{ color: " #1DA1F2" }}>
                <Schedule />
              </IconButton>
              <IconButton
                // onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                style={{ color: " #1DA1F2" }}
              >
                <EmojiEmotions />
              </IconButton>
            </div>

   {/* tweet button in whatsHappening           */}
            <div className={styles.btn}>
              <button className={styles.tweetbtn} onClick={handleUploadClick}>
                Tweet
              </button>
            </div>

  </div>
 
        </div>
        </div>
    </div>
    )

}
export default TweetPost;