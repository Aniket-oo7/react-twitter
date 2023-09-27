import style from "./whatsHappening.module.css";
import { FiMoreHorizontal } from "react-icons/fi";
import {BsEmojiFrown, BsEmojiAngry} from 'react-icons/bs'
import { useState } from "react";


export default function WhatsHappening() {
  
  const content = [
    {
      id: 1,

      inIntrseted: false,
      uText: "IPL.live",
      mText: "Punjab vsLucknow",
      bText: "890k Tweets",
    },
    {
      id: 2,
      inIntrseted: false,
      uText: "Trending in india",
      mText: "Kejriwal",
      bText: "4,234 Tweets",
    },
    {
      id: 3,

      inIntrseted: false,
      uText: "Trending in india",
      mText: "#PBKSvsLSG",
      bText: "2,357 Tweets",
    },
    {
      id: 4,

      inIntrseted: false,
      uText: "Trending in india",
      mText: "#RamMandir",
      bText: "1,378 Tweets",
    },
    {
      id: 5,

      inIntrseted: false,
      uText: "MUSIC",
      mText: "#BTS",
      bText: "377k Tweets",
    },
    {
      id: 6,
      inIntrseted: false,
      uText: "Trending in india",
      mText: "Kejriwal",
      bText: "4,234 Tweets",
    },
    {
      id: 7,

      inIntrseted: false,
      uText: "Trending in india",
      mText: "#PBKSvsLSG",
      bText: "2,357 Tweets",
    },
    {
      id: 8,

      inIntrseted: false,
      uText: "Trending in india",
      mText: "#RamMandir",
      bText: "1,378 Tweets",
    },
    {
      id: 9,

      inIntrseted: false,
      uText: "MUSIC",
      mText: "#BTS",
      bText: "377k Tweets",
    },
    {
      id: 10,

      inIntrseted: false,
      uText: "Trending in india",
      mText: "#RamMandir",
      bText: "1,378 Tweets",
    },
  ];

  const [list, setList] = useState(content);
  const [show, setShow] = useState(3);

  const handleShow=()=>{
    setShow(show + 2);
  }

  function notInterested(element) {
    console.log(element);
 
    if (element.inIntrseted === true) {
      element.inIntrseted = false;
      setList([...list]);
    } else {
      element.inIntrseted = true;
      setList([...list]);
    }
  }

  function dataDelete(element) {
    let index = list.indexOf(element);
    console.log(index);
    list.splice(index, 1);
    setList([...list]);
  }

  return (
    <>
      <div className={style.box}>
        <div className={style.head}><h2>What's Happening</h2></div>

        {list.slice(0,show).map((element) => (
          <div className={style.contentmain}>
            <div className={style.content}>
              <span>{element.uText}</span>
              <span className={style.content1}>{element.mText}</span>
              <span>{element.bText}</span>
            </div>
            <span className={style.Parent}>
              {element.inIntrseted ? (
                <span className={style.child}>
                  <h4 onClick={() => dataDelete(element)} style={{margin:'0.2rem'}}><BsEmojiFrown/> Not interested in this</h4>
                  <h4 onClick={() => dataDelete(element)} style={{margin:'0.2rem'}}><BsEmojiAngry/> This trend harmful </h4>
                </span>
              ) : (
                " "
              )}
              <FiMoreHorizontal onClick={() => notInterested(element)} />
            </span>
          </div>
        ))}

        <h4 className={style.ShowMore} onClick={handleShow}>Show more..</h4>
      </div>
    </>
  );
}