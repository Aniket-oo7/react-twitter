import style from './tweetActions.module.css'
import {FaRegComment} from 'react-icons/fa'
import {AiOutlineRetweet} from'react-icons/ai'
import {FcLikePlaceholder} from 'react-icons/fc'
import {FcLike} from 'react-icons/fc'
import { FiShare } from "react-icons/fi";
import { IoIosStats } from "react-icons/io";
import { useDispatch } from 'react-redux'
import { tweetDataSlice } from '../../../../ReduxData/ReduxStore'

function TweetActions({item}){
    const dispatch = useDispatch();
    function handleLikeCount(id){
        dispatch(tweetDataSlice.actions.addOrRemoveLike(id))      
    }
    function handleCommentCount(id){
        dispatch(tweetDataSlice.actions.addCommentCount(id))      
    }
    function handleShare(id){
        dispatch(tweetDataSlice.actions.shareTweet(id))      
    }
    function handleReTweet(id){
        dispatch(tweetDataSlice.actions.addReTweet(id))      
    }
    function handleViewCount(id){
        dispatch(tweetDataSlice.actions.addViewCount(id))      
    }
    return(
        <div className={style.tweetActionsMain}>
        <div className={style.tweetActionsOptions}>
        <FaRegComment onClick={()=>handleCommentCount(item.id)}/> &nbsp;&nbsp;{''}
        {item.commentCount}
        </div>
        <div className={style.tweetActionsOptions}>
        <AiOutlineRetweet onClick={()=>handleReTweet(item.id)}/> &nbsp;&nbsp;{''}
        {item.reTweetsCount}
        </div>
        <div 
        className={style.tweetActionsOptions}>
         { 
         item.isLiked ? 
         (<FcLike onClick={() => handleLikeCount(item.id)}/>):
        (<FcLikePlaceholder onClick={() => handleLikeCount(item.id)}/> )
        } &nbsp;&nbsp;{''}
        {item.likeCount}
        </div>
        <div className={style.tweetActionsOptions}>
        <IoIosStats onClick={()=>handleViewCount(item.id)}/> &nbsp;&nbsp;{''}
        {item.viewCount}
        </div>
        <div className={style.tweetActionsOptions}>
        <FiShare onClick={()=>handleShare(item.id)}/> &nbsp;&nbsp;{''}
        {item.shareCount}
        </div>
        </div>

    )
}
export default TweetActions;