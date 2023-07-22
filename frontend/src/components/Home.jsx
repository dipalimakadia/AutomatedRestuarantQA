import React, { useState } from "react";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const request = { query: inputValue };
    try {
      console.log(request);
      const response = await axios.post("http://127.0.0.1:8000/", request);
      const data = response.data;
      setDisplayValue(data);
      if (data) {
        setInputValue("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="justify-content-between">
        <form
          className="d-flex justify-content-between"
          id="ask"
          onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask Question"
            required
            aria-label="Question"
          />
          <button className="btn btn-outline-success" type="submit">
            Ask
          </button>
        </form>

        <div className="w-full text-center mt-2 font-bold" id="display">
         <p>{displayValue}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
