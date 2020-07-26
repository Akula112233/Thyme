import React from 'react';
import Chat from './chat/chat'
import SideBar from './sidebar/sidebar'
import './App.css';

function App() {
  return (
    <div className="App">
      <Chat></Chat>
      <SideBar></SideBar>
    </div>
  );
}

export default App;
