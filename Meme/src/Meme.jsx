/* eslint-disable no-unused-vars */
import { useState } from "react";
import codes from "./codes";
import axios from "axios";
import React from "react";


const Meme = () => {

    const [error, setError] = useState("");
    const [memes, setMeme] = useState([]);
    
    const handleSubmit = async (e)=>{
        e.preventDefault()

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        const isValidCode = !isNaN(data.code) && codes[parseInt(data.code, 10)];
        if(!isValidCode){
            setError("Enter Status Code Correctly")
               setTimeout(() => {
                 setError("");
               }, 3000);
        }
        else{
              try {
              const code = data.code
              const meme = await axios.get(
                `${import.meta.env.VITE_APP_URL}${code}`
              );
              if(!meme.data){
             alert("Sorry, Doesn't Exit Yet!!")
            }
              else{

                 if (!memes.some((m) => m.code === meme.data.code)) {
                   setMeme([...memes, meme.data]);
                 } else {
                   alert("This meme has already been added in the Memes Section!");
                 }
            }
        } catch (error) {
            alert(error);
        }
    }
    e.target.reset()
    }


  return (
    <>
      <div className="w-screen p-6 flex justify-center items-center">
        <div className="container  h-60 w-2xl  bg-orange-200 text-slate-600 p-2 m-2 rounded-2xl">
          <h2 className="p-4 text-3xl text-black">Find Your Desired Meme</h2>
          <form
            className="flex flex-col text-black items-center m-1"
            onSubmit={handleSubmit}
            autoComplete="off"
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

            <button type="submit" className="text-white w-50 top-3">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div>
        <h1>Memes</h1>
        <hr />
        <div className="grid grid-cols-4  p-4">
        {memes.map((m) => {
          const { code, image } = m;
          return (
              <div className="flex flex-col items-center" key={code}>
                <img
                  src={image}
                  className="h-40 w-35 mb-1"
                  alt={`Meme ${code}`}
                />
                <h2 className="text-center">{code}</h2>
              </div>
          );
        })}
        </div>
   
      </div>
    </>
  );
}
export default Meme