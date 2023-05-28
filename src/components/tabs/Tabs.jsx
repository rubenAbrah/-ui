import { useRef } from "react";

import wave from "./wave";
import "./Tabs.css";
function Tabs({ data, setActiveTab, flexDirection = 'row' }) {
  const glider = useRef(null)
  return (
    <div
      className="flex my20 alignCenter justifyCenter"
    >
      <div className={`position-relative d-flex 
      flex-${flexDirection} 
      p-3 rounded-3   tabs`}>
        {data.map((tab, i) => (
          <div key={i} className={`tab position-relative rounded-3 radioLabel
       `}
            onClick={(e) => {
              wave(e)
               glider.current.parentElement.clientWidth > glider.current.clientWidth * 2  ?
               glider.current.style.transform = `translateX(${i}00%)`:
                glider.current.style.transform = `translateY(${i}00%)`
              setActiveTab(data[i])
            }} >
            {tab.title}
          </div>
        ))}
        <span ref={glider} className={`glider rounded-3`}></span>
      </div>
    </div>
  );
}
export default Tabs;
