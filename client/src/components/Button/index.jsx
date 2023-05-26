import React from "react";

function index({ children, onClick }) {
  return (
    <button
      className="rounded bg-green-600 hover:bg-green-500  p-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default index;
