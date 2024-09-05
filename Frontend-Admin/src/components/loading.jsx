import React from 'react';
import "../App.css"
const Loading = () => {
  return (
    <div className="loading-overlay">
      <img src="/loading.gif" alt="Loading..." className="loading-gif" />
    </div>
  );
};

export default Loading;
