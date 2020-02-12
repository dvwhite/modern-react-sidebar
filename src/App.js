import React from 'react';
import './App.css';
import SideBar from './components/Sidebar';

const items = [
  { name: 'home', label: 'Home'},
  { name: 'billing', label: 'Billing'},
  { name: 'settings', label: 'Settings'}
];

function App() {
  return (
    <div className="App">
      <SideBar items={items}/>
    </div>
  );
}

export default App;
