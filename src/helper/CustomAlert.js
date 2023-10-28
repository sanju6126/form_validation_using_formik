import React from 'react';

function CustomAlert({ data, onClose }) {
  return (
    <div className="custom-alert">
      <div className="custom-alert-content">
        <h2>Form Data</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default CustomAlert;
