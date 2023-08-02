import React from 'react';
import Scanner from './Scanner';
import Qr from './qr';
import QrCodeScanner from './QrScan';
const App = () => {
 


  return (
    <div className='App'>
      <h1>ID Card Scanner App</h1>
     {/* <QrCodeScanner/> */}
     <Qr/>
    
    </div>
  );
};

export default App;
