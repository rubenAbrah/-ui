import { useDispalyMedia } from "../../../hooks/useDispalyMedia";
import { useState, useEffect } from "react";
function toggleTheme(e) {
  if (document.body.dataset.theme == "dark") {
    document.body.dataset.theme = "";
    e.target.className = "moon";
  } else {
    document.body.dataset.theme = "dark";
    e.target.className = "sun";
  }
}
function HeaderComponent(
  {
    // setShowMenu
  }
) {
  const [showSidebar, setShowSidebar] = useState(true);
  useEffect(() => {
    console.log(showSidebar);
  }, [showSidebar]);

  return (
    <header
      className={`width100 br075rem p-3 my-2 ${
        useDispalyMedia() ? "sticky-top top-1" : ""
      } headerBacground header rounded-3  `}
    >
      <div className={`d-flex   justify-content-between p30 m15`}>
        <div className="">
          {!useDispalyMedia() ? (
            <span onClick={() => setShowSidebar(true)}>
              <i
                className={showSidebar ? "menu-close" : "menu-active"}
                aria-hidden="true"
              ></i>
            </span>
          ) : (
            ""
          )}
        </div>
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
