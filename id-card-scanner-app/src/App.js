import React from 'react';
import Scanner from './Scanner';
import Qr from './qr';
import QrCodeScanner from './QrScan';
import Mail from './mail';
const App = () => {
 


  return (
    <div className='App'>
      <h1>ID Card Scanner App</h1>
     {/* <QrCodeScanner/> */}
     <Qr/>

{/* <Mail/>     */}
    </div>
  );
};

export default App;
