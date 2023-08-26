import React, { useState } from 'react';
import { AiFillCloseSquare } from "react-icons/ai";

function MoreInfo({ moreInfoText }) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  const closeMoreInfo = () => {
    setShowMoreInfo(false);
  };

  return (
    <div className="more-info-content">
      <a onClick={toggleMoreInfo} style={{ color: 'purple', fontSize: '20px' }}>Click To Show More</a>
      {showMoreInfo && (
        <div className="more-info">
          <AiFillCloseSquare
            style={{ marginLeft: 10, cursor: 'pointer' }}
            onClick={closeMoreInfo} // Add onClick to closeMoreInfo
          />
          <div className="more-info-content" style={{ color: 'black', fontSize: '18px' }}>
            {moreInfoText}
          </div>
        </div>
      )}
    </div>
  );
}

export default MoreInfo;


