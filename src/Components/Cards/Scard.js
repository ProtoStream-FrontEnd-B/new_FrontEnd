import react from "react";
import verify from "../../Assets/icons/verify.svg";
import "./css/Scard.css";

const Scard = ({ head, para, btnName, img, status }) => {
  // enable, disable, completed
  //   var status = "enable";
  //   var status = "disable";

  return (
    <button
      disabled={status == "disable"}
      className={status == "disable" ? "Scard disabled-card" : "Scard hover"}
      onClick={() => alert("clicked")}
    >
      <header>
        <h1 className="heading">{head}</h1>
        {status == "completed" ? (
          <img src={verify} alt="" className="verify-icon" />
        ) : null}
      </header>
      <main>
        <img src={img} alt="" className="illustration" />
        <p className="para">{para}</p>
      </main>
      <footer>
        <button disabled={status == "disable"}>
          {status == "completed" ? "Completed" : `${ btnName }`}
        </button>
      </footer>
    </button>
  );
};

export default Scard;
