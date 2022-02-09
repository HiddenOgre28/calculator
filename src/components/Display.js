import React from 'react';

const Display = ({calc, result}) => {
  return (
    <div className="Display">
      {(result !== "") ? <span className='Display__result' tabIndex="2">
        {result}
      </span> : <span className='Display__result' tabIndex="2">
        0
      </span> }
      <span className='Display__operator' tabIndex="1">
        {calc || "0"}
      </span>
    </div>
  );
}

export default Display;