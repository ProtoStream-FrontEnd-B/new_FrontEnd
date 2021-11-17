import React from "react";
import './css/Contact.css'
import Footer from './Footer';

function Contact() {
  return (
    <div>
      <div className="contact">
        <h1 className="head"> Contact Us</h1>
        <div style={{ margin: "5em" }} className="address">
          <h3 className="sub_head"> Address :-</h3>
          <p className="para">
            TECHNOLOGY BUSINESS INCUBATOR - KIET KIET Group of Institutions,
            <br />
            Ghaziabad (An ISO - 9001 : 2008 Certified Institute) 13 km Stone,
            <br />
            Ghaziabad-Meerut Road, Ghaziabad, U.P. (201206)
          </p>
        </div>
        <div style={{ margin: "5em" }} className="contact_no.">
          <h3 className="sub_head"> Contact :-</h3>
          <p className="para">
            +91 9873816176
            <br />
            +91 9756277542
          </p>
        </div>
        <div style={{ margin: "5em" }} className="Email">
          <h3 className="sub_head"> Email :-</h3>
          <p className="para">tbikiet@gmail.com</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
