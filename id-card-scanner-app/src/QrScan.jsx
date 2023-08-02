import React, { useEffect } from 'react';
import {Html5QrcodeScanner} from 'html5-qrcode';

const QrCodeScanner = () => {
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
      document.getElementById('result').innerHTML = `
        <h2>Success!</h2>
        <p><a href="${result}">${result}</a></p>
      `;
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

  return (
    <div className='Qr' style={{width:"300px"} }>
      <div id="reader"></div>
      <div id="result"></div>
    </div>
  );
};

export default QrCodeScanner;
