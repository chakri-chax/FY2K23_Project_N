import { Html5QrcodeScanner } from "html5-qrcode";
import {usestate} from "react";

function Scanner() {
const [scanResult,setScanResult] = usestate(null)


 
    const scanner = new Html5QrcodeScanner("reader", {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      });
    
      scanner.render(success, error);
    
      function success(result) {
        scanner.clear();
        setScanResult(result);
      }
    
      function error(err) {
        console.warn(err)
      }
    
 

 return(
    <div className="App">
        <h1>Qr Reader</h1>
    {
        scanResult?
        (<div id="reader"><p>scan Result {scanResult}</p></div>)
        : <div id="reader"></div>
    }

    </div>
 )

}
export default Scanner
