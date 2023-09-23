import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import TweetFeed from "../../HomeSections/TweetSection/TweetFeed/tweetFeed";
import { tweetDataSlice } from "../../../ReduxData/ReduxStore";
function Home(){
    const navigate = useNavigate();
    const dispatch = useDispatch()

    function goToRegister(){
        navigate("/signup")
    }
    function goToDemo(){
        navigate("/demoPreview")
    }
    function goToLogin(){
        navigate("/login")
      
    }
    function handleSideBar(){
        navigate('/sideBar')
    }
    useEffect(() => {
       fetch('/tweets.json')
       .then((res) => res.json())
       .then((data) => dispatch(tweetDataSlice.actions.fetchTweets(data)))
    },[])
    return(
        <>
        <div style={{color:'black'}}>
        Welcome TO The Home Page...
        <button onClick={goToRegister}>
            Register
        </button>
        <button onClick={goToLogin}>
            Login
        </button>
        <button onClick={handleSideBar}>
           Open Sidebar
        </button>
        <button onClick={goToDemo}>
         Demo
        </button>
        </div>
        <TweetFeed/>
        </>
    )
}
export default Home;