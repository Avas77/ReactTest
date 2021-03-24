import React, { useState } from "react";
import "./Form.css";

const Form = () => {
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
        if (e.target.value === "") {
          setNameError(true);
        } else {
          setNameError(false);
        }
        setName(e.target.value);
        break;

      case "email":
        if (
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
            e.target.value
          )
        ) {
          setEmailError(false);
        } else {
          setEmailError(true);
        }
        setEmail(e.target.value);
        break;

      case "phone":
        setPhone(e.target.value);
        if (phone.length < 7) {
          setPhoneError(true);
        } else {
          setPhoneError(false);
        }
        break;
    }
  };

  const formDataHandler = () => {};

  return (
    <div className="form">
      <form className="myform" onSubmit={formDataHandler}>
        <div className="field">
          <label htmlFor="Name">Name</label>
          <input
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
            type="text"
            placeholder="Your date of birth"
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
            onChange={(e) => setProvince(e.target.value)}
            name="province"
            value={province}
            className="input"
            name="province"
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
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Form;
