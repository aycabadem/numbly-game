import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const message = "Merhaba, alt bileşen!";

  return (
    <div>
      <ChildComponent a={message} />
    </div>
  );
};

export default ParentComponent;
