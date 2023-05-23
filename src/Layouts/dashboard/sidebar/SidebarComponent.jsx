import { useEffect, useState , useRef } from "react"; 
import "../../../css/bootstrap.css";
import "../../../css/icons.css";
import "../../../css/colors.css";

function SidebarComponent(
  {
    // showMenu, setShowMenu
  }
) {
  // ${!showMenu   ? "lMinus280px": ''}

  const paths = useRef(null);

  const query = 991;
  const [showMenu, setShowMenu] = useState(true);
  const [match, setMatch] = useState(window.innerWidth > query);

  function onChange() {
    setMatch(window.innerWidth > query);
    match ?  setShowMenu(true):setShowMenu(false)
  }

  useEffect(() => {
    window.addEventListener("resize", onChange);
    return () => window.removeEventListener("resize", onChange);
  }, [window.innerWidth]);

  return (
    <div
      className={` rounded-2 sidebar position-fixed vh-100 zindex-20
          scrollbar sidebarHeight overflowXhidden  start-0 p-3 m-2 col-xxl-2   
          ${
            showMenu  
              ? "col-lg-3 col-md-4 col-sm-5  col-12"
              : "mlMinus100"
          } 
         `}
    >
      {!match ? (
        <span
          onClick={() => {
            setShowMenu(false);
          }}
          className=" position-absolute end-0 align-content-center justify-content-center d-flex"
        >
          <i className="close p-2" aria-hidden="true"></i>
        </span>
      ) : (
        ""
      )}

      <a
        href="/"
        className="d-flex my-3 justify-content-center align-content-center"
      >
        <img
        //   src="/src/assets/img/svg/logo.svg"
        />
      </a>

      <hr className="darkHr" />
      <div className="imgSection  my-2  justify-content-center aligncontent-center">
        <img
          className="width-100"
          // src="/src/assets/img/backgrounds/sidebarImage.jpg"
          alt=""
        />
      </div>

      <hr className="darkHr" />
      <div className="flex  imgSection  align-content-center my-2">
        <img
          className="rounded-circle size40"
          // src="/src/assets/img/backgrounds/avatar.png"
          alt=""
        />
        <span className="m-3">Richard Davis</span>
      </div>
      <hr className="darkHr" />
      <nav>
        <ul className="list-inline">
          {menuList.map((menuItem) => (
            <li key={menuItem.name} className="d-flex">
              <a
                className={`${location.pathname === menuItem.link ? 'active' : '' } p-2 m-1 w-100`} 
                href={menuItem.link}
              >
                {menuItem.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

let menuList = [
  { name: "Link1", link: "/link1" },
  { name: "Link2", link: "/link2" },
  { name: "Link3", link: "/link3" },
  { name: "Link4", link: "/link4" },
];
export default SidebarComponent;
