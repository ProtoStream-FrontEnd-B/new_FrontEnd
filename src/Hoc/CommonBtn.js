import react from "react";




const CommonBtn = ({ btnName, img }) => {

    return (
        <button className="btn"> {btnName} {img ? <img className="btn-img" src={img} alt="" /> : ""}</button>
    )

}


export default CommonBtn;