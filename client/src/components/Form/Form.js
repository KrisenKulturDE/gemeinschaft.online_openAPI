import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [requestText, setRequestText] = useState("");

  const makeRequest = () => {
    const request = {
      token: "",
      phone,
      zip,
      requestText
    };

    if (request) {
      axios
        .post("/api/requests", request)
        .then(res => {
          if (res.data) {
            // TODO Add success message which is more visible to the user
            console.log("Success!");
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div>
      <input
        type="text"
        onChange={e => {
          setPhone(e.target.value);
        }}
        value={phone}
        placeholder="Phone Number"
      ></input>
      <input
        type="text"
        onChange={e => {
          setZip(e.target.value);
        }}
        value={zip}
        placeholder="Zip Code"
      ></input>
      <input
        type="text"
        onChange={e => {
          setRequestText(e.target.value);
        }}
        value={requestText}
        placeholder="Request Text"
      ></input>
      <button onClick={makeRequest}>Make request</button>
    </div>
  );
};

export default Form;
