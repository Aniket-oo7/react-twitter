import { create } from "@mui/material/styles/createTransitions";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { userName } from "../components/HomeSections/SideBar/profileButton";

export const loginOrLogOutSlice = createSlice({
    name:'loginData',
    initialState:{
        isLogeedIn : false
    },
    reducers:
    {
      userLogin:(state,action) => {
        const {phone ,pass} = action.payload
        state.isLogeedIn = true
        localStorage.setItem(
            "loginUserDetails",
         JSON.stringify({
            isUserLogIn:state.isLogeedIn,
            phone:phone,
            pass:pass
         })
        )
        },
        userLogout : (state, action) => {
            state.isLogeedIn = false
           localStorage.setItem(
            "loginUserDdetails",
            JSON.stringify({
                isUserLogIn : state.isLogeedIn,
                phone:"",
                pass:""
            })
           )
        }
    }
})


export const tweetDataSlice = createSlice({
    name: "tweetData",
    initialState: {
      tweets: [],
    },
    reducers: {
      fetchTweets:(state, actions) => {
        const tempData = [...actions.payload];

        const newData = tempData.map((item) => {
          let {createdAt} = item
          return {
            ...item,
            createdAt:createdAt.slice(0,10),
            viewCount: parseInt((Math.random() * 1000).toFixed(0)),
            shareCount: parseInt((Math.random() * 1000).toFixed(0)),
          };
        });
        // console.log("Hello", newData);
        state.tweets.push(...newData);
      },
      
      addNewTweet:(state,action) => {
        const content = action.payload
        const newTweet = {
          commentCount:parseInt((Math.random() * 1000).toFixed(0)),
          content:content,
          createdAt: new Date().toDateString(),
          id: new Date(),
          isLiked:false,
          "image": `https://picsum.photos/1000/500?q=${state.tweets.length  + 1}`,
          tweetedBy:{id:new Date(),name:userName},
          likeCount:parseInt((Math.random() * 1000).toFixed(0)),
          viewCount:parseInt((Math.random() * 1000).toFixed(0)),
          reTweetsCount:parseInt((Math.random() * 1000).toFixed(0)),
          shareCount:parseInt((Math.random() * 1000).toFixed(0))
        }
        state.tweets.unshift(newTweet)
      },
      
      addCommentCount : (state ,action) => {
        const id = action.payload
        const itemData = state.tweets.find((item) => item.id == id)
        itemData.commentCount += 1
      },

      addReTweet:(state,action) => {
        const id = action.payload
        const itemData = state.tweets.find((item) => item.id == id)
        itemData.reTweetsCount += 1
      },

      addOrRemoveLike:(state,action) => {
        const id = action.payload
        const itemData =state.tweets.find((item) => item.id == id)
        if(itemData.isLiked){
          itemData.likeCount -= 1;
          itemData.isLiked = !itemData.isLiked
        } else {
          itemData.likeCount += 1;
          itemData.isLiked = !itemData.isLiked
       }
     },

    addViewCount: (state, action) => {
        const id = action.payload;
        const itemData = state.tweets.find((item) => item.id == id);
        itemData.viewCount += 1;
      },
      
    shareTweet:(state,action) => {
        const id = action.payload
        const itemData = state.tweets.find((item) => item.id == id)
        itemData.shareCount += 1
      }
   }
    
})



export const store = configureStore({
    reducer:{
        [loginOrLogOutSlice.name] : loginOrLogOutSlice.reducer,
        [tweetDataSlice.name] : tweetDataSlice.reducer
    }
    
})