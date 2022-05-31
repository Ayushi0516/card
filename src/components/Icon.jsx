import React from "react";

const Icon = ({ cardDetails }) => {
  return (
    <div className="deviceBox">
      <h3>{cardDetails.device}</h3>
      <button>
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
    </div>
  );
};

export default Icon;