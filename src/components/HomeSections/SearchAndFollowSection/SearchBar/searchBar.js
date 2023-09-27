import {BsSearch} from 'react-icons/bs'
import { IconButton, TextField } from '@mui/material';
import style from './searchBar.module.css'
import { useState } from 'react';
import { useEffect } from 'react';
function SearchBar(){
    

  const [userData,setUserData] = useState([])
  const [searchData,setSearchData] = useState([])

   useEffect(() => {
    fetch('/userData.json')
    .then((response) => response.json())
    .then((data) => {setUserData(data)})
   },[])

  function handleUserChange(value){
    if(value == ""){
      setSearchData([])
    }
      const newData = userData.filter((user) => 
                   user.first_name.toLowerCase().includes(value))
      if(value != ""){
        setSearchData(newData)
      }else{
        setSearchData([])
      }
  }
  
   
    return(
      
        <div className={style.icon}>
      <div>
      
        <input
          className={style.searchInput}
          type="text"
          placeholder=" Search Twitter"
         onChange={(e)=>handleUserChange(e.target.value)}
        />
        <BsSearch className={style.icon2} />
          {
            searchData.map((item,i) => {
              return <div key={i}>{item.first_name}
              </div>
            })
          } 
      </div>
     </div>
  )
}

export default SearchBar;