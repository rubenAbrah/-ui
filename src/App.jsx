// import "./css/bootstrap.css";
import { useState } from "react";
import "./css/fonsts.css";
import "./css/colors.css";
import Tabs from "./components/tabs/Tabs";
import SectionComponent from "./components/sections/SectionComponent";
import ProfileSectionComponent from "./components/sections/ProfileSectionComponent"; 
import React from "react";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction"; 
import SidebarComponent from "./Layouts/dashboard/sidebar/SidebarComponent";
import HeaderComponent from "./Layouts/dashboard/header/HeaderComponent";
// import FloatingButton from "./components/floatingButton/FloatingButton";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const [activeTab, setActiveTab] = useState(tabsData[0]);
  return (
    <>
      {/* <ion-icon name="heart"></ion-icon>53 */}
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
              <Tabs setActiveTab={setActiveTab} data={tabsData} tabsDirection={'row'} />
            </div>
            <div className="mt-2">{activeTab.content}</div>
          </ProfileSectionComponent>
        </div>
      </div>
    </>
  );
}
function Colorables() {
  const [activeTab, setActiveTab] = useState(tabData[0]);
  return (
    <SectionComponent title={"title"}>
      <div className="d-flex">
        <Tabs setActiveTab={setActiveTab} data={tabData} tabsDirection={'column'} />
        <div className="mt-2">{activeTab.content}</div>
      </div>
    </SectionComponent>
  )

}
function Colorabl() {
  const [activeTab, setActiveTab] = useState(tabDat[0]);
  return (
    <SectionComponent title={"title"}>
      <div className="d-flex">
        <Tabs setActiveTab={setActiveTab} data={tabDat} tabsDirection={'column'} />
        <div className="mt-2">{activeTab.content}</div>
      </div>
    </SectionComponent>
  )

}

const Step1 = () => {
  const { register, handleSubmit } = useForm();
  const { actions, state } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 1</h2>
      <label>
        First Name:
        <input {...register("firstName")} defaultValue={state.firstName} />
      </label>
      <label>
        Last Name:
        <input {...register("lastName")} defaultValue={state.lastName} />
      </label>
      <input type="submit" />
    </form>
  );
};

const Step2 = () => {
  const { register, handleSubmit } = useForm();
  const { state, actions } = useStateMachine({ updateAction });
  const onSubmit = (data) => {
    actions.updateAction(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Step 2</h2>
      <label>
        Age:
        <input {...register("age")} defaultValue={state.age} />
      </label>
      <label>
        Years of experience:
        <input {...register("yearsOfExp")} defaultValue={state.yearsOfExp} />
      </label>
      <input type="submit" />
    </form>
  );
};
const Result = ( ) => {
  const { state } = useStateMachine(updateAction);

  return (
    <>
      <h2>Result:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};
function Col() {
  const [activeTab, setActiveTab] = useState(tab[0]);
  return (
    <SectionComponent title={"title"}>
      <div className="d-flex">
        <Tabs setActiveTab={setActiveTab} data={tab} tabsDirection={''} flexDirection={'column'} />
        <div className="mt-2">{activeTab.content}</div>
      </div>
    </SectionComponent>
  )

}


const tabsData = [
  {
    title: "Colorables",
    content: <Colorables />,
  },
  {
    title: "Blocks",
    content: <Colorabl />
  },
  {
    title: "Blocks",
    content: <Col />
  },
];

const tabDat = [
  {
    title: "Colorabl",
    content: <>'wer'
      <input /> </>
  },
  {
    title: "Blocks",
    content: <Col />
  },
  {
    title: "Blocks",
    content:
      '2  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolores.'
  },
];


const tab = [
  {
    title: "Colorables",
    content: <Step1 />

  }, {
    title: "Blocks",
    content: <Step2/> 
  }, {
    title: "Blocks", 
    
    content: <Result/>},
]; 

const tabData = [
  {
    title: "Colorables",
    content: '6 Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }, {
    title: "Blocks",
    content: '7 Lorem ipsum dolor sit amet.'
  }, {
    title: "Blocks",
    content: '8  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, dolores.'
  },
];

export default App;
