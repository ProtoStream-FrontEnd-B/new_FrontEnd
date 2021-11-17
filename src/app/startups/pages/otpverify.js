import React,{useState} from 'react'
import '../css/otpverify.css'
import arrow from "../../../Assets/icons/arrow.svg"

function  Otpverify() {
    const [verified, setverified] = useState(false)

    return (
        <div className="otpverify">
            <div className="otpverify__step">
                <p>Step 1</p>

            </div>
            <div className="otpverify__heading">
                  <p>OTP Verification</p>
            </div>
            <div className="optverify__container">
             <p className="optverify__container-uppertext" >
                 Enter the OTP sent to<br></br>91******87
             </p>
             <div className="optverify__inputs">
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
          <input type="number" />
          
             </div>
             <p className="optverify__container-lowertext">Didn't got OTP? <strong>Resend OTP</strong></p>
         {verified &&  <p className="optverify__container-lowertext"> Verification sucessful !!!</p>}
             <button><p>verify </p><img src={arrow} /></button>
            </div>
        </div>
    )
}

export default Otpverify
