import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import classes from "./VehiculeCondition7.module.css";
import axios from "axios";
import Stepper from "./Stepper";
const VehiculeCondition7 = ({ setStep, step, infos, setInfos }) => {
  const [imported, setImported] = useState(1);
  const [cars, price, setPrice] = useOutletContext();
  const fetchData = async () => {
    try {
      const response = await axios.post("http://localhost:5000/predict", infos);
      console.log("Response:", response.data); // Log the response to check its contents
      setPrice(response.data.prix);
      // Do something with the data if needed
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <h4 className={`${classes.title} mx-5 mb-4 px-0 py-5`}>
        Vehicle Condition
      </h4>
      <Stepper step={step} />
      <div className="container-fluid px-5">
        <div className="mb-3">
          <p className={classes.text}>
            Does the car belong to an individual or a company?
          </p>
          <select className={classes.select}>
            <option value="" disabled selected hidden>
              Choose car ownership
            </option>
            <option value="individual">Individual</option>
            <option value="company">Company</option>
          </select>
        </div>
        <div className="mb-3">
          <p className={classes.text}>How was the car used before?</p>
          <select className={classes.select}>
            <option value="" disabled selected hidden>
              Select previous car usage
            </option>
            <option value="transport">Transport</option>
            <option value="personal">Personal</option>
          </select>
        </div>
        <div className="container px-0">
          <p className={classes.text}>
            Is it an imported vehicle under 5 years ?
          </p>
          <div className="row">
            <div className="col-6">
              <div
                onClick={() => {
                  setImported(1);
                }}
                className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`}
                style={{ backgroundColor: imported === 1 && "#E7E9FF" }}
              >
                <input
                  type="radio"
                  name="imported"
                  checked={imported === 1}
                  className={classes.radio}
                />
                <p className={`me-3 ${classes.text}`}>No</p>
              </div>
            </div>

            <div className="col-6">
              <div
                onClick={() => {
                  setImported(2);
                }}
                className={`col-12 d-flex align-items-center ${classes.cont} mb-3 ps-3`}
                style={{ backgroundColor: imported === 2 && "#E7E9FF" }}
              >
                <input
                  type="radio"
                  name="imported"
                  checked={imported === 2}
                  className={classes.radio}
                />
                <p className={`me-3 ${classes.text}`}>Yes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.line}></div>
      <div className="d-flex justify-content-between" style={{ width: "85%" }}>
        <button
          className={classes.prev}
          onClick={() => setStep((prev) => prev - 1)}
        >
          Previous
        </button>
        <Link className="text-black text-decoration-none" to={"/result"}>
          <button className={classes.next} onClick={fetchData}>
            Estimate
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VehiculeCondition7;
