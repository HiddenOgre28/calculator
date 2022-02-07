import React from 'react';

const Settings = () => {
  return (
    <div>
        <section>
            <h2>Theme</h2>
            <input type="range" min="1" max="3" step="1"></input>
        </section>
        <section>
            <button>Sound: Off</button>
        </section>
    </div>
  );
};

export default Settings;
