import { useSelector } from "react-redux"
import TweetCard from "../card"
import TweetPost from "../tweetPost"
import style from './tweetFeed.module.css'
import { Button } from "@mui/material"
function TweetFeed(){
    const tweetsArray = useSelector((state) => state.tweetData.tweets)
    
    return(
        <div>
            <div className={style.feedSection}>
                <div className={style.navBar}>
                 <p className={style.heading}>Home</p>
                 <div className={style.Button}>
                   <button className={style.childButtons}>
                    FOR YOU
                   </button>
                   <button className={style.childButtons}>
                    FOLLOWING
                   </button>
                    </div>
                </div>
            <div className={style.feedSectionTweetPost}>
                <TweetPost/>
            </div>
            {tweetsArray.map((item) => 
            <TweetCard item={item}/>
            )}
            </div>
        </div>
    )
}
export default TweetFeed