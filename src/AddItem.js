import { useState } from "react";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";
const axios = require("axios");

const AddItem = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const addPerson = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: "http://localhost:3004/persons",
      data: {
        name: name,
        email: email,
        phone: phone,
        location: location,
      },
    }).then(() => {
      history.push("/");
    });
  };
  return (
    <div className="container  mt-5 pt-5">
      <form onSubmit={addPerson}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="sample@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="telephone">
            Phone
          </label>
          <input
            type="tel"
            name="telephone"
            id="telephone"
            className="form-control"
            placeholder="111-222-333"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="location">
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            className="form-control"
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="mb-3 text-center">
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
