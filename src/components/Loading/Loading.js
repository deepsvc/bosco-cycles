/* React imports */
import React from "react";

/* Local Imports */

const Loading = props => {
  return (
    <div
      data-testid="loading-banner"
      className="flex items-center justify-center bg-gray-100 h-full w-full border rounded"
    >
      <span className="font-bold">
        {props.message || "Loading..."}
      </span>
    </div>
  );
};
export default Loading;
