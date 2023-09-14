import "./main.css";
import { useState } from "react";

const BMI = () => {
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState();
  const [msg, setMsg] = useState("");

  const reloadWindow = () => {
    window.location.reload();
  };

  const handleCalculations = (e) => {
    e.preventDefault();

    if (height === 0 || weight === 0) {
      alert("Please fill all fields, enter a number!");
    } else {
      let bmiForm = Number((weight / (height * height)) * 703);
      setBmi(bmiForm.toFixed(2));
    }

    if (bmi < 25) {
      setMsg("You are Underweight");
    } else if (bmi >= 25 || bmi <= 30) {
      setMsg("You are Healthy");
    } else {
      setMsg("You are not healthy, try to looss weight!");
    }
  };

  return (
    <section className="box">
      <div className="form-box">
        <h1 className="title">Bmi Calculator</h1>

        <form onSubmit={handleCalculations}>
          <div className="form-contol">
            <label className="labels">Age</label>
            <input
              className="inputs"
              type="number"
              placeholder="Agre"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="form-contol">
            <label className="labels">Weight</label>
            <input
              className="inputs"
              type="number"
              placeholder="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div className="form-contol">
            <label className="labels">Height</label>
            <input
              className="inputs"
              type="number"
              placeholder="Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="form-control">
            <button className="btn" type="submit">
              Calculate
            </button>
            <button
              type="submit"
              className="btn btn-reset"
              onClick={reloadWindow}
            >
              Reset
            </button>
          </div>

          <div className="result">
            <h3>Age: {age}</h3>
            <h3>Your BMI is: {bmi} </h3>
            <p className="msg">{msg}</p>
          </div>
        </form>
      </div>
    </section>
  );
};
export default BMI;
