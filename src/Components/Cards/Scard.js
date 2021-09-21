import react from "react";
import verify from "../../Assets/icons/verify.svg"
import "./css/Scard.css"

const Scard = ({ head, para, btnName, img, status, backgroundColor, imgHeight }) => {



    return (
        <div style={backgroundColor} className="Scard">
            <div className="head-div">
                <h1 className="head">{head}</h1>
                <img className={status ? "visible verify" : "none"} src={verify} alt="" />
            </div>

            <div className="contents">
                <p className="para">{para}</p>


                <img style={imgHeight} className="S-img" src={img} alt="" />
            </div>
            <div className={status ? "none" : "visible btn-div"}>
                <button className="btn">{btnName}</button>
            </div>
        </div>
    )


}


export default Scard;