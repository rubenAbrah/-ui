import { RadioButton } from "../radioButtonWave/RadioButton"; 

import "./Tabs.css";

function Tabs({data, setActiveTab }) {
  return (
    <div
      className="flex my20 alignCenter justifyCenter"
      onChange={(e) => setActiveTab(data[e.target.id])}
    >
      <div className={`position-relative d-flex p-3 rounded-3 tabs`}>
        {data.map((tab, i) => (
          <RadioButton
            key={tab.id}
            labelClassName={`tab rounded-3 radioLabel`}
            className={`radioInput ${tab["className"]}`}
            id={tab.id}
            name={tab.name}
            defaultChecked={i == 0 ? "checked" : false}
          >
            {tab.title}
          </RadioButton>
        ))}
        <span className={`glider rounded-3`}></span>
      </div>
    </div>
  );
}
export default Tabs;
