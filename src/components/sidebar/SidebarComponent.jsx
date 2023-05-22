  
import { useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery"; 
import './../../css/bootstrap.css' 
import './../../css/icons.css'
function SidebarComponent({ 
    // showMenu, setShowMenu 
}) { 
  // ${!showMenu   ? "lMinus280px": ''}

  const [showMenu,setShowMenu] = useState(true)
  return (
    <div className="d-flex">
    <div className={`zindex-20 offset-xl-2`}>
      <div
        className={`m-2 rounded-1  position-fixed col-xl-2 col-md-3 col-sm-6 col-8 scrollbar sidebarBackground sidebarText sidebarHeight overflowXhidden  start-0 p-3 ${
          !useMediaQuery && true ? "left0" : ""
        } 
       `}
      >
        {/* {!useMediaQuery() ? ( */}
          <div className="clossButton position-absolute end-0">
            <span
              onClick={() => {
                setShowMenu(false)
            console.log(12)
            }}
              className="align-content-center justify-content-center flex"
            >
            <i className="close" aria-hidden="true"></i>
            </span>
          </div>
        {/* ) : (
          ""
        )} */}

        <a href="/" className="d-flex my-3 justify-content-center align-content-center">
          <img src="/src/assets/img/svg/logo.svg" />
        </a>

        <hr className="darkHr" />
        <div className="imgSection  my-2  justify-content-center aligncontent-center">
          <img
            className="width-100"
            src="/src/assets/img/backgrounds/sidebarImage.jpg"
            alt=""
          />
        </div>

        <hr className="darkHr" />
        <div className="flex  imgSection  align-content-center my-2">
          <img
            className="rounded-circle size40"
            src="/src/assets/img/backgrounds/avatar.png"
            alt=""
          />
          <span className="m-3">Richard Davis</span>
        </div>
        <hr className="darkHr" />
        {/* <MenuList/> */}
      </div> 
    </div>
    <div className="">
        123
        </div>
    </div>
  );
}

export default SidebarComponent;
