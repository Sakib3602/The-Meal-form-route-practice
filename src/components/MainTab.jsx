import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MainTab = () => {
    const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="w-[900px] m-auto">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
      <TabList>
        <Tab >My Self</Tab>
        <Tab>About</Tab>
        <Tab>My Projects</Tab>
        <Tab>Contact</Tab>
      </TabList>
      <TabPanel>
        <h1>Hello, I am Sakib Sarkar Emon.</h1>
      </TabPanel>
      <TabPanel>
        I am Full Stack Developer. I am Good in MERN. MY devOps knowledge is Beat everyone.
      </TabPanel>
      <TabPanel>
        Here My gitHub link Check this out.
      </TabPanel>
      <TabPanel>
        Contact With Me.
      </TabPanel>
    </Tabs>
  
    </div>
  );
};

export default MainTab;
