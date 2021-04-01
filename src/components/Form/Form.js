import React, { useState } from "react";
import "./Form.css";
import uuid from "react-uuid";
import { connect } from "react-redux";
import TableData from "../TableData/TableData";

const Form = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("Nepal");
  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);

  const changedHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        if (e.target.value === "") {
          setNameError(true);
        } else {
          setNameError(false);
        }
        break;

      case "email":
        setEmail(e.target.value);
        if (
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            e.target.value
          )
        ) {
          setEmailError(false);
        } else {
          setEmailError(true);
        }
        break;

      case "phone":
        setPhone(e.target.value);
        if (phone.length < 7) {
          setPhoneError(true);
        } else {
          setPhoneError(false);
        }
        break;
      default:
        console.log("nothing");
    }
  };

  const formDataHandler = (e) => {
    e.preventDefault();
    const data = {
      id: uuid(),
      name,
      email,
      phone,
      date,
      city,
      district,
      province,
      country,
      change: false,
    };
    props.dispatch({
      type: "ADD",
      data,
    });
    setName("");
    setEmail("");
    setPhone("");
    setDate("");
    setCity("");
    setDistrict("");
    setProvince("");
    setCountry("Nepal");
    setNameError(null);
    setPhoneError(null);
    setEmailError(null);
    console.log(data);
  };

  return (
    <div className="form">
      <h1>Please Provide Your Info</h1>
      <form className="myform" onSubmit={formDataHandler}>
        <div className="field">
          <label htmlFor="Name">Name</label>
          <input
            required
            id="name"
            type="text"
            placeholder="Your Name"
            name="name"
            onChange={changedHandler}
            value={name}
            className={`input ${
              nameError == null ? "" : nameError ? "wrong" : "right"
            }`}
          />
          <i
            className={`fas fa-check ${
              nameError == null ? "noshow" : nameError ? "noshow" : "show"
            }`}
          ></i>
        </div>
        <br />

        <div className="field">
          <label htmlFor="Email">Email</label>
          <input
            required
            id="email"
            type="email"
            placeholder="Your Email"
            name="email"
            onChange={changedHandler}
            value={email}
            className={`input ${
              emailError == null ? "" : emailError ? "wrong" : "right"
            }`}
          />
          <i
            className={`fas fa-check ${
              emailError == null ? "noshow" : emailError ? "noshow" : "show"
            }`}
          ></i>
        </div>
        <br />

        <div className="field">
          <label htmlFor="Phone">Phone Number</label>
          <input
            required
            id="phone"
            type="number"
            placeholder="Your Phone Number"
            name="phone"
            onChange={changedHandler}
            value={phone}
            className={`input ${
              phoneError == null ? "" : phoneError ? "wrong" : "right"
            }`}
          />
          <i
            className={`fas fa-check ${
              phoneError == null ? "noshow" : phoneError ? "noshow" : "show"
            }`}
          ></i>
        </div>
        <br />

        <div className="field">
          <label htmlFor="Date">Date of Birth</label>
          <input
            required
            id="date"
            type="date"
            placeholder="Your date of birth"
            name="date"
            value={date}
            className="input"
            onChange={(e) => setDate(e.target.value)}
          />
          <i className="fas fa-check noshow"></i>
        </div>
        <br />

        <div className="field">
          <label htmlFor="City">City</label>
          <input
            required
            id="city"
            type="text"
            placeholder="Your City"
            name="city"
            value={city}
            className="input"
            onChange={(e) => setCity(e.target.value)}
          />
          <i className="fas fa-check noshow"></i>
        </div>
        <br />

        <div className="field">
          <label htmlFor="District">District</label>
          <input
            required
            id="district"
            type="text"
            placeholder="Your District"
            name="district"
            value={district}
            className="input"
            onChange={(e) => setDistrict(e.target.value)}
          />
          <i className="fas fa-check noshow"></i>
        </div>
        <br />

        <div className="field">
          <label htmlFor="Province">Province</label>
          <select
            id="province"
            onChange={(e) => setProvince(e.target.value)}
            name="province"
            value={province}
            className="input"
            name="province"
            required
          >
            <option value="">Choose a province</option>
            <option value="Province No. 1">Province No. 1</option>
            <option value="Province No. 2">Province No. 2</option>
            <option value="Bagmati Province">Bagmati Province</option>
            <option value="Gandaki Province">Gandaki Province</option>
            <option value="Lumbini Province">Lumbini Province</option>
            <option value="Karnali Province"> Karnali Province</option>
            <option value="Sudurpashchim Province">
              Sudurpashchim Province
            </option>
          </select>
          <i className="fas fa-check noshow"></i>
        </div>
        <br />

        <div className="field">
          <label htmlFor="Country">Country</label>
          <input
            required
            id="country"
            type="text"
            placeholder="Your Country"
            name="country"
            value={country}
            className="input"
            onChange={(e) => setCountry(e.target.value)}
          />
          <i className="fas fa-check noshow"></i>
        </div>
        <br />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <TableData />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};

export default connect(mapStateToProps)(Form);
