import React, { useState } from "react";

export const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      className={showDrop ? "drop__area" : "hide__drop"}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      <span className="opacity__zero">s</span>
    </div>
  );
};
