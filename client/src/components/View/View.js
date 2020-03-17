import React, { useEffect, useState } from "react";
import axios from "axios";

const View = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios.get("/api/requestswithoutplz").then(res => {
      if (res) {
        setState(res);
      }
    });
  }, []);

  return <h1>Test</h1>;
};

export default View;
