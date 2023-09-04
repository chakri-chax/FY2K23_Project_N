import React, { useState, useEffect } from 'react';
import {Html5QrcodeScanner} from 'html5-qrcode';

const QrCodeScanner = () => {
  const [name, setName] = useState('fgfg');
  const [id, setId] = useState('dfgfd');

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 20,
    });

    scanner.render(success, error);

    function success(result) {
      console.log("result",result);
      const qrCodeData = result.split(',');

      if (qrCodeData.length >= 2) {
        const scannedName = qrCodeData[0];
        const scannedId = qrCodeData[1];
        setName(scannedName.trim());
        setId(scannedId.trim());
      } else {
        console.error('Invalid QR code format.');
      }

      
      scanner.clear();
      document.getElementById('reader').remove();
    }

    function error(err) {
      console.error(err);
    }

    return () => {
      scanner.clear();
    };
  }, []);
  // console.log(qrCodeData);
  console.log(name,id);

  return (
    <div className='Qr' style={{width:"300px"} }>
    <div id="reader"></div>
    name : {name}<br/>
      id :{id}
    <div id="result"></div>
    <div>

      
    </div>
  </div>

  );
};

export default QrCodeScanner;
