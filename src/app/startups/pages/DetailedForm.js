import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
// import arrow from "../../../Assets/icons/arrow.svg";
import { setJson } from "../../../Global/Helper";
import { CreateStep3, GetIdea } from "../../../redux/actions/startupAction";
// import { OpenStep3, GetStep2 } from "../../../redux/actions/startupAction";

const DetailedForm = () => {
  const idea_detail = useSelector((state) => state.startup);

  const dispatch = useDispatch();
  const history = useHistory();

  const [data, setData] = useState({
    comment: "",
    Gender: "",
    Aadhar: null,
    PAN: "",
    Category: "",
    Q1: "",
    Q2: "",
    Q3: "",
    Q4: "",
    Q5: "",
    Q6: "",
    Q7: "",
    verified: 0,
  });
  const startup_detail = useSelector((state) => state.startup);

  const handleonLoad = () => {
    console.log(startup_detail, "hey its the new startup detail");

    console.log(idea_detail);
    if (idea_detail.Idea.status === "approved") {
      console.log("its the open step2 form ");
    } else if (idea_detail.Idea.status === "under-verified") {
      if (startup_detail.Step3 != null || startup_detail.Step3 != undefined) {
        console.log("Hey this must work otherwise its no use");
        const {
          comment,
          Gender,
          Aadhar,
          PAN,
          Category,
          Q1,
          Q2,
          Q3,
          Q4,
          Q5,
          Q6,
          Q7,
        } = startup_detail.Step3;
        setData({
          ...data,
          comment: comment,
          Gender: Gender,
          Aadhar: Aadhar,
          PAN: PAN,
          Category: Category,
          Q1: Q1,
          Q2: Q2,
          Q3: Q3,
          Q4: Q4,
          Q5: Q5,
          Q6: Q6,
          Q7: Q7,
          verified: 1,
        });
      } else {
        setData({ ...data, verified: 1 });
      }
    } else if (idea_detail.Idea.status === "verified") {
      if (startup_detail.Step3 !== null || startup_detail.Step3 !== undefined) {
        const {
          comment,
          Gender,
          Aadhar,
          PAN,
          Category,
          Q1,
          Q2,
          Q3,
          Q4,
          Q5,
          Q6,
          Q7,
        } = startup_detail.Step3;
        setData({
          ...data,
          comment: comment,
          Gender: Gender,
          Aadhar: Aadhar,
          PAN: PAN,
          Category: Category,
          Q1: Q1,
          Q2: Q2,
          Q3: Q3,
          Q4: Q4,
          Q5: Q5,
          Q6: Q6,
          Q7: Q7,
          verified: 2,
        });
      } else {
        setData({ ...data, verified: 2 });
      }
    }
  };
  useEffect(() => {
    handleonLoad();
  }, [startup_detail]);

  const onHandleBack = () => {
    history.push("/startups/Register");
  };

  const onStep3 = () => {
    history.push("/startups/Register");
  };

  const onHandleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onHandleSubmit = (e) => {

    console.log("At least htis work i dont know klnowown")
    e.preventDefault();
    const userid = setJson(localStorage.getItem("user"));
    console.log(userid);
    console.log(userid.number);
    let id = userid._id;
    const body = {
      comment: data.comment,
      Gender: data.Gender,
      Aadhar: data.Aadhar,
      PAN: data.PAN,
      Category: data.Category,
      Q1: data.Q1,
      Q2: data.Q2,
      Q3: data.Q3,
      Q4: data.Q4,
      Q5: data.Q5,
      Q6: data.Q6,
      Q7: data.Q7,
    };
    console.log(body);

    const Fdata = {
      id: id,
      Formdata: body,
    };

    dispatch(CreateStep3(Fdata));
    history.push("/startups/Register");
    console.log(data);
  };
  //const nextstep
  const verified = data.verified;

  console.log(`verified ${verified}`);
  return (
    <div className="form">
      <form>
        <label>
          Comment:
          {verified == 0 && (
            <input
              name="comment"
              type="text"
              value={data.comment}
              onChange={onHandleChange}
            />
          )}
        </label>

        {(verified === 1 || verified === 2) && <p>{data.comment}</p>}
        <br />
        <label>
          Gender:
          {verified == 0 && (
            <input
              name="Gender"
              type="text"
              value={data.Gender}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Gender}</p>}
        <br />
        <label>
          Aadhar:
          {verified === 0 && (
            <input
              name="Aadhar"
              type="number"
              value={data.Aadhar}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Aadhar}</p>}
        <br />
        <label>
          PAN:
          {verified === 0 && (
            <input
              name="PAN"
              type="text"
              value={data.PAN}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Idea_title}</p>}
        <br />
        <label>
          Q1:
          {verified === 0 && (
            <input
              name="Q1"
              type="text"
              value={data.Q1}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Q1}</p>}
        <br />
        <label>
          Q2:
          {verified === 0 && (
            <input
              name="Q2"
              type="text"
              value={data.Q2}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Q2}</p>}
        <br />
        <label>
          Q3:
          {verified === 0 && (
            <input
              name="Q3"
              type="text"
              value={data.Q3}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Q3}</p>}
        <br />
        <label>
          Q4:
          {verified === 0 && (
            <input
              name="Q4"
              type="text"
              value={data.Q4}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Q4}</p>}
        <br />
        <label>
          Q5:
          {verified === 0 && (
            <input
              name="Q5"
              type="text"
              value={data.Q5}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Q5}</p>}
        <br />
        <label>
          Q6:
          {verified === 0 && (
            <input
              name="Q6"
              type="text"
              value={data.Q6}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Q6}</p>}
        <br />
        <label>
          Q7:
          {verified === 0 && (
            <input
              name="Q7"
              type="text"
              value={data.Q7}
              onChange={onHandleChange}
            />
          )}
        </label>
        {(verified === 1 || verified === 2) && <p>{data.Q7}</p>}
        <br />
        {verified === 0 && <button onClick={onHandleSubmit}>Submit </button>}
        {verified === 1 && <button onClick={onHandleBack}>Back</button>}
        {verified === 2 && <button onClick={onStep3}>Step 3 Done</button>}
      </form>
    </div>
  );
};

export default DetailedForm;
