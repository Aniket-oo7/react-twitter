import { Avatar } from '@mui/material';
import MoreVert from '@mui/icons-material/MoreVert';
import style from './card.module.css'
import TweetActions from './TweetActions/tweetActions';

function TweetCard({item}){
    return(
        <div className={style.mainSection}>
         
{/* Tweet Nav Section       */}
          <div className={style.topSection}>
           <Avatar src={item.image}/>
           <div className={style.cardHeader}>
            <p className={style.userName}>{item.tweetedBy.name}</p>
            <p>{item.createdAt}</p>
           </div>
            <MoreVert sx={{marginLeft:"30%"}}/>
          </div>

{/* Tweet Caption and image section */}
          <div className={style.tweetCaption}>
          {item.content}
          <div className={style.imgContainer}>
            <img src={item.image}/>
          </div>
          </div>

{/* Tweet Actions Section */}
          <TweetActions item={item}/>
        </div>
    )
}
export default TweetCard;