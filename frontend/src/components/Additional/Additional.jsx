import React from "react";
import QuickLinks from "./QuickLinks";
import Contact from "./Contact";
import DidYouKnow from "./DidYouKnow";
import SpeedInspiration from "./SpeedInspiration";
import ImproveNow from "./ImproveNow";

const Additional = () => {
  return (
    <aside className="additional">
      <QuickLinks />
      <SpeedInspiration />
      <Contact />
      <DidYouKnow />
      <ImproveNow />
    </aside>
  );
};

export default Additional;
