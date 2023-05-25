import "./css/bootstrap.css";
import { useState } from "react";
import "./css/fonsts.css";
import "./css/colors.css";
import Tabs from "./components/tabs/Tabs";
import SectionComponent from "./components/sections/SectionComponent";
import ProfileSectionComponent from "./components/sections/ProfileSectionComponent";
import "ionicons/dist/css/ionicons.css";
import SidebarComponent from "./Layouts/dashboard/sidebar/SidebarComponent";
import HeaderComponent from "./Layouts/dashboard/header/HeaderComponent";
import FloatingButton from "./components/floatingButton/FloatingButton";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeTab, setActiveTab] = useState(tabsData[0]);
  return (
    <><ion-icon name="heart"></ion-icon>53
      <SidebarComponent
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />

      <div className="d-flex flex-column offset-xxl-2 offset-lg-3 px-xxl-5 mt-2 px-4">
        <HeaderComponent setShowSidebar={setShowSidebar} />
        <div className="">
          <ProfileSectionComponent sectionTitle={"title"} sectionClassName={""}>
            <div className="d-flex justify-content-between">
              <div className="">132</div>
              <Tabs setActiveTab={setActiveTab} data={tabsData} />
            </div>
            <div className="mt-5">{activeTab.content}</div>
          </ProfileSectionComponent>
        </div>
      </div>
    </>
  );
}

const tabsData = [
  {
    id: 0,
    title: "Colorables",
    name: "tabs",
    className: "radio-1",
    content: <SectionComponent title={"title"}>123 </SectionComponent>,
  },
  {
    id: 1,
    title: (<><ion-icon name="chatbox-outline"></ion-icon> Logos</>),
    name: "tabs",
    className: "radio-2",
    content:(<input />)},
  {
    id: 2,
    title: "Blocks",
    name: "tabs",
    className: "radio-3",
    content:
      "Gangway boom coffer rigging tackle gabion Shiver me timbers aye draft barque. Scourge of the seven seas pressgang Blimey galleon six pounders yawl grapple jolly boat lugger Jack Ketch. Splice the main brace boatswain snow Chain Shot salmagundi keel crow's nest Shiver me timbers jib ye.",
  },
  {
    id: 3,
    title: "Blocks",
    name: "tabs",
    className: "radio-4",
    content:
      "Gangway boom coffer rigging tackle gabion Shiver me timbers aye draft barque. Scourge of the seven seas pressgang Blimey galleon six pounders yawl grapple jolly boat lugger Jack Ketch. Splice the main brace boatswain snow Chain Shot salmagundi keel crow's nest Shiver me timbers jib ye.",
  },
];

export default App;
