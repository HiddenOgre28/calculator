import React from 'react';

const Display = () => {
  return (
    <div className="Display">
      <span className='Display__result' tabIndex="2">
        (125456)
      </span>
      <span className='Display__operator' tabIndex="1">
        125321451123654895223
      </span>
    </div>
  );
}

export default Display;