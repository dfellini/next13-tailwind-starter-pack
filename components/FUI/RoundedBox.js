import React from "react";

const RoundedBox = ({ children }) => {
  return (
    <div className="mb-6 w-3/12 w-full rounded-xl bg-slate-200 p-6">
      {children}
    </div>
  );
};

export default RoundedBox;
