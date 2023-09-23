import TweetFeed from "./HomeSections/TweetSection/TweetFeed/tweetFeed";
import SideBar from "./HomeSections/SideBar/sideBar";
import style from './demoPreview.module.css'

function DemoPreview(){
    return(
        <div className={style.demo}>
          <div className={style.sideBar} style={{width:'20%'}}>
            <SideBar/>
          </div>

          <div className={style.tweetFeed} style={{width:'40%'}}>
            <TweetFeed/>
          </div>
        </div>
    )
}
export default DemoPreview;