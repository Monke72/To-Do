import React, { useState } from "react";

export const DropArea = ({ onDrop }) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      className={showDrop ? "drop__area" : "hide__drop"}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
    >
      click here
    </div>
  );
};
