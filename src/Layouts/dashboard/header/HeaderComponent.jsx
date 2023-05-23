import { useEffect, useState } from "react"; 
function HeaderComponent( {
  // setShowMenu
}) {
 

  function toggleTheme(e) {
    if (document.body.dataset.theme == "dark") {
      document.body.dataset.theme = "";
      e.target.className = "moon"; 
    } else {
      document.body.dataset.theme = "dark";
      e.target.className = "sun"; 
    }
  }
 

  return (
    <header
      className={`width100 br075rem p-3 my-2  sticky-top top-1 headerBacground header rounded-3  `}
    >
      <div className={`flex   xxx|||xxx p30 m15`}>
        {/* {!useMediaQuery() ? (
          <span onClick={() => setShowMenu(!showMenu)}>
            <i
              className={showMenu ? "menu-close" : "menu-active"}
              aria-hidden="true"
            ></i>
          </span>
        ) : (
          ""
        )} */}
        <div className="">
          <span className="m-2">
            <i className="account" aria-hidden="true"></i>
          </span>
          <span className="m-2">
            <i className="notification" aria-hidden="true"></i>
          </span>
          <span className="m-2">
            <i
              className={document.body.dataset.theme == "dark" ? "sun" : "moon"}
              onClick={toggleTheme}
            ></i>
          </span>
        </div>
      </div>
    </header>
  );
}
export default HeaderComponent;
