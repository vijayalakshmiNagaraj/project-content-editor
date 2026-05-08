import React, { useState } from 'react';
import { DropDown, Toggle } from '@core';

function App() {
  const [dark, setDark] = useState(false);
  const [activeItem, setActiveItem] = useState("What's new");

  const menuData = [
    { 
      label: "Dark mode", 
      keepOpen: true, // Prevents closing when toggling
      rightElement: <Toggle isOn={dark} onToggle={() => setDark(!dark)} />,
      onClick: () => setActiveItem("Dark mode")
    },
    { 
      label: "Profile", 
       keepOpen: true,
      onClick: () => setActiveItem("Profile") 
    },
    { type: "divider" },
    { 
      label: "What's new", 
      onClick: () => setActiveItem("What's new") ,
       keepOpen: true,
    },
    { 
      label: "Help", 
       keepOpen: true,
      onClick: () => setActiveItem("Help") 
    },
    { 
      label: "Send feedback", 
       keepOpen: true,
      onClick: () => setActiveItem("Send feedback") 
    },
    { type: "divider" },
    { 
      label: "Log out", 
      onClick: () => console.log("User logged out") 
    }
  ].map(item => ({
    ...item,
    // isActive is true only if it matches our state
    isActive: item.label === activeItem 
  }));

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '50px' }}>
      <DropDown 
        trigger={<button style={{padding: '8px 16px', cursor: 'pointer'}}>Open Settings</button>} 
        items={menuData} 
      />
    </div>
  );
}

export default App;