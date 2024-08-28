import React from 'react';

const Btn = (props) => {
  return (
    <div style={{ width: '10%' }}>
      <button 
        type="button" 
        className="btn btn-primary btn-lg" 
        style={{ 
          width: '100%', 
          opacity: 0.7,
        }}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Btn;
