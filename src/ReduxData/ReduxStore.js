import { create } from "@mui/material/styles/createTransitions";
import { configureStore, createSlice } from "@reduxjs/toolkit";

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
          return {
            ...item,
            viewCount: parseInt((Math.random() * 1000).toFixed(0)),
            shareCount: parseInt((Math.random() * 1000).toFixed(0)),
          };
        });
        // console.log("Hello", newData);
        state.tweets.push(...newData);
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