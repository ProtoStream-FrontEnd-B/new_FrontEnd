import React, { useState } from "react";
import "../css/Step3.css";
function Step3() {
    const[isVerified,setisVerified]=useState(false)
    const[underVeriication,setunderVerfication]=useState(true)
   const showbutton= !underVeriication && !isVerified

  return (
    <div className="container">
      <div className="step3__heading">Step 3</div>
      <form className="step3__form">
        <div className="step3__form-upper">
          <div className="step3__form-upperleft">
            <div>
              <div className="step3__form-field">
                <p>Latest Photo</p>
                <input  type="file" />
              </div>
              <div  className="step3__form-field">
                <p>Gender</p>
                <input type="text" />
              </div>
              <div className="step3__form-field">
                <p>Aadhaar Number</p>

                <input type="number" />
              </div>
              <div className="step3__form-field">
                <p>PAN Number(if any)</p>
                <input type="number" />
              </div>
              <div className="step3__form-field">
                <p>Category</p>

                <input type="text" />
              </div>
            </div>
            <div className="step3__form-upperleft-left"></div>
          </div>

          <div className="step3__form-upperright">
            <div className="step3__form-field">
              <p>Current Carrer Status</p>
              <input type="text" />
            </div>
            <div className="step3__form-field">
              <p> How did you came to know about TBI </p>
              <input type="text" />
            </div>
            <div className="step3__form-field">
              <p>Educational qualifications with specilisation</p>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="form__lower">
          <div className="form__lower-field">
            <p>
              Any experiences realting to entrepreneurship, leadership, fund
              raising, organizing activities/ events etc
            </p>
            <div className="form__lower-field-options">
              <div className="form__lower-field-option1">
                <input type="checkbox" />
                <p>Yes</p>
              </div>
              <div className="form__lower-field-option1">
                <input type="checkbox" />
                <p>No</p>
              </div>
              
            </div>
          </div>
          <div className="form__lower-field">
            <p>
                Have you started and registered your own Venture (startup) ?
            </p>
            <div className="form__lower-field-options">
              <div className="form__lower-field-option1">
                <input type="checkbox" />
                <p>Yes</p>
              </div>
              <div className="form__lower-field-option1">
                <input type="checkbox" />
                <p>No</p>
              </div>
              
            </div>
          </div>
          <div className="form__lower-field">
            <p>
              Have you recived financial support/award for your present work from any other sources ? (if so, please furnish details)
            </p>
            <div className="form__lower-field-options">
              <div className="form__lower-field-option1">
                <input type="checkbox" />
                <p>Yes</p>
              </div>
              <div className="form__lower-field-option1">
                <input type="checkbox" />
                <p>No</p>
              </div>
              
            </div>
          </div>
          <div className="form__lower-field">
              <p>Status of work already carried out on the scale of TRL</p>
              <input type="number" placeholder="Select level" />
          </div>
          <div className="form__lower-field">
              <p>Please describe the technology for which you are seeking marketing opportunities or market for whichyou are seeking technology opportunities. </p>
              <textarea  />
          </div>
          <div className="form__lower-field">
              <p>Applicant confirms that he/she is fully commited to exploring a buisness idea </p>
              <div className="form__lower-field-options1">
              <input className="checkbox"  type="checkbox" placeholder="Select level" />
              <p>I agree</p>
              </div>
          </div>
          <div className="form__lower-field">
              <p>
                  I declare that all the statements made in the application are true, complete and correct to the best of my knowledge and belief <br></br>
              If any information found false or incorrect my candidature will stand cancelled and all my claims will be forfeited <br></br>
              I have not reiceved any financial assistance for the present proposal from any other agency. <br></br>
              if agree please upload your scanned signature/digital signature

              </p>
            
              <div className="form__lower-field-options1">
              <input className="checkbox"  type="checkbox" placeholder="Select level" />
              <p>I agree</p>
              </div>
          </div>
          <div className="form-footer">
              <input type="file" />
              <div className="form-footer-left" >
             {isVerified &&   <p className="form-footer-left-verify"> Under Verfication By</p>}
             {underVeriication &&  <p className="form-footer-left-verify"> is Verified By</p> }
                <p className="form-footer-left-tbi">TBI</p>
             {showbutton && <button  type="submit"> Submit</button>}
              </div>
              </div>
        </div>
      </form>
    </div>
  );
}

export default Step3;
