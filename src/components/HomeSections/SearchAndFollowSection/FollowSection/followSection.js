import React, { useState, useEffect } from "react";
import rm from "./followSection.module.css";
import { Avatar } from "@mui/material";
import { red } from "@mui/material/colors";

const FollowSection = () => {
  const [userdata, setUserData] = useState([]);
  const [show, setShow] = useState(3);
  const [isFollow, setIsFollow] = useState(false);

  const handleShow = () => {
    setShow(show + 3);
  };

  const handleFollowed = (id) => {
    console.log(userdata);
    const data = userdata.find((item) => item.user_id == id);
    data.children = !data.children;
    setIsFollow(!isFollow);
  };

  useEffect(() => {
    // fetch data from an API
    fetch("/userData.json")
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error(error));
  }, []);

  // console.log(userdata)

  return (
    <>
      <div className={rm.box}>
        <header className={rm.head}>
          <h3 style={{ paddingLeft: "1rem" }}>
            <h3>Who To Follow</h3>
          </h3>
        </header>

        <section style={{ marginRight: "100px" }}>
          {userdata.slice(0, show).map((element) => (
            <div className={rm.main}>
              <div className={rm.contentmain} key={element.user_id}>
                <div className={rm.content}>
                  {/* <img className={rm.image} src={element.img} alt="" /> */}
                  <Avatar
                    sx={{ bgcolor: red[500], marginLeft: "60px" }}
                    aria-label="recipe"
                  >
                    {element.first_name[0]}
                  </Avatar>
                </div>
                <div className={rm.text}>
                  <p>{element.first_name}</p>
                  <span>@{element.last_name}</span>
                </div>
                <div>
                  <button
                    className={rm.btn}
                    onClick={() => handleFollowed(element.user_id)}
                  >
                    {element.children ? "Followed" : "Follow"}
                  </button>
                </div>
              </div>
            </div>
          ))}
          <h4 className={rm.ShowMore} onClick={handleShow}>
            Show more..
          </h4>
        </section>
      </div>
    </>
  );
};

export default FollowSection;
