import React from "react";
// import Hero from "./hero/Hero";
// import Info from "./info/Info";
// import Pricing from "./pricing/Pricing";
// import Team from "./team/Team";
// import Workflow from "./workflow/Workflow";
import "./all.scss";

const Hero = React.lazy(() => import("./hero/Hero"));
const Info = React.lazy(() => import("./info/Info"));
const Pricing = React.lazy(() => import("./pricing/Pricing"));
const Team = React.lazy(() => import("./team/Team"));
const Workflow = React.lazy(() => import("./workflow/Workflow"));

const All = () => {
  return (
    <div>
      <Hero />
      <Info />
      <Team />
      <Workflow />
      <Pricing />
    </div>
  );
};

export default All;
