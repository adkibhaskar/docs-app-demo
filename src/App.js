import React from 'react';
import Sidebar from './components/Sidebar';
import AppointmentDetails from './components/AppointmentDetails';

const App = () => {
  return (
    <div className='container'>
      <Sidebar/>
      <AppointmentDetails/>
      
    </div>
  )
}

export default App
