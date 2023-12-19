import React from "react";

const Collapsible = () => {
  return (
    <>
      <div className="bg-red-500 my-10">
        <Collapsible trigger="Start here" transitionTime={100}>
          <p>
            This is the collapsible content. It can be any element or React
            component you like.
          </p>
          <p>
            It can even be another Collapsible component. Check out the next
            section!
          </p>
        </Collapsible>
      </div>
    </>
  );
};

export default Collapsible;
