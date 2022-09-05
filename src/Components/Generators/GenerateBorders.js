import React from "react";
import "./Generators.scss";

const GenerateBorders = ({ data }) => {
  return (
    <div className="data-holder borders">
      <p className="data-word">Border Countries:</p>
      {data.map((e) => {
        return (
          <span key={e} className="data">
            {e}
          </span>
        );
      })}
    </div>
  );
};

export default GenerateBorders;
