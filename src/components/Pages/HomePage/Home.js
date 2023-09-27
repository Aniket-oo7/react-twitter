import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import SideBar from "../../HomeSections/SideBar/sideBar";
import TweetFeed from "../../HomeSections/TweetSection/TweetFeed/tweetFeed";
import { tweetDataSlice } from "../../../ReduxData/ReduxStore";
import SearchBar from "../../HomeSections/SearchAndFollowSection/SearchBar/searchBar";
import WhatsHappening from "../../HomeSections/SearchAndFollowSection/What'sHappening/whatsHappening";
import FollowSection from "../../HomeSections/SearchAndFollowSection/FollowSection/followSection";

import style from './Home.module.css'
function Home(){
    const navigate = useNavigate();
    const dispatch = useDispatch()

    // function goToRegister(){
    //     navigate("/signup")
    // }
    // function goToDemo(){
    //     navigate("/demoPreview")
    // }
    // function goToLogin(){
    //     navigate("/login")
      
    // }
    // function handleSideBar(){
    //     navigate('/sideBar')
    // }
    useEffect(() => {
       fetch('/tweets.json')
       .then((res) => res.json())
       .then((data) => dispatch(tweetDataSlice.actions.fetchTweets(data)))
    },[])
    return(
        <>
        <div className={style.demo}>
            <div className={style.sideBar} style={{width:'20%'}}>
            <SideBar/>
            </div>
        
          <div className={style.tweetFeed} style={{width:'40%'}}>
            <TweetFeed/>
          </div>
          

          <div className={style.searchBarNdFollowSection}>
            <SearchBar/>
            <WhatsHappening/>
            <FollowSection/>
          </div>
        </div>
        </>
    )
}
export default Home;