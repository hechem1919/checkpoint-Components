import React from 'react';
import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Addresse from './Components/Profile/Addresse';

function App(){
  return (
    <div className="App">
     <ProfilePhoto/>
     <FullName/>
     <Addresse/>
    
    </div>
  );
}

export default App;