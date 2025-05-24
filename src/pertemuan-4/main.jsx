import {StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import FrameworkList from "./FrameworkList";
import FrameworkListSearchFilter from './frameworkListSearchFilter';
import ResponsiveDesign from "./ResponsiveDesign";
import "./tailwind.css";

createRoot(document.getElementById("root"))
  .render(
    <div>
      {/* <FrameworkList/> */}
      {/* {<FrameworkListSearchFilter/>} */}
      {<ResponsiveDesign/>}
      
    </div>
);