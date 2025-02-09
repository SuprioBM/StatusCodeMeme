/* eslint-disable no-unused-vars */
import { useState } from "react";
import codes from "./codes";
import axios from "axios";
import React from "react";


const Home = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    const isValidCode = !isNaN(data.code) && codes[parseInt(data.code, 10)];

    if (!isValidCode) {
      setError("Enter a valid status code");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    } else {
      try {
        await axios.post(`${import.meta.env.VITE_APP_URL}/memes/add`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        alert("Added Successfully");
      } catch (error) {
        alert(error.response.data.message);
      }
    }
    e.target.reset();
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="container  h-90 w-2xl bg-cyan-300 text-slate-600 p-2 m-2 rounded-2xl">
        <h2 className="text-3xl text-black p-4">ADD A CODE WITH MEME</h2>
        <form
          className="flex flex-col text-black items-center m-1"
          action=""
          onSubmit={handleSubmit}
          method="POST"
        >
          <label htmlFor="code" className="">
            Enter Status Code:
          </label>
          <input
            placeholder="Enter Status Code"
            id="code"
            name="code"
            className="w-50 border-1 m-4 border-b-black"
            type="text"
          />
          {error && <div>{error}</div>}
          <label htmlFor="image" className="form-label">
            Enter Meme Link:
          </label>
          <input
            id="image"
            name="image"
            placeholder="Enter Meme link"
            className="w-50 m-4 border-1 border-b-black "
            type="text"
          />

          <button type="submit" className="text-white w-50 top-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Home;
