import React from "react";
import axios from "axios";
import Wrapper from "../ui/Wrapper";
import { useState } from "react";

const backendUrl = import.meta.env.VITE_BACKEND_URL

const SendText = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);

  //----------------------------------------------------------
  const handleChange = (e) => {
    setText(e.target.value);
  };

  //----------------------------------------------------------
  const handleText = async () => {
    if ((text == "")) {
      setError(true);
    } else {
      setError(false);
      const sentText = await axios.post(`${backendUrl}/text/v1/post`, {
        text,
      });
      if (sentText.status == 200) {
        setId(sentText.data.text_id);
      }
    }
  }
  return (
    <>
      <Wrapper>
        <div className="bg-[#ECEFF7] p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
            Send a Text to Nearby Devices, Instantly!
          </h2>
          <p className="text-gray-700 mb-4">
            Ever need to quickly share a message with someone close by without
            the hassle of exchanging numbers or setting up a chat? Our
            "SendText" feature allows you to do just that! Simply type your
            message below, and we'll broadcast it to other users in your
            immediate vicinity. It's perfect for quick notes, sharing links, or
            just saying hello to those around you.
          </p>
          <label
            htmlFor="send-text-input"
            className="block text-lg font-medium text-gray-800 mb-2"
          >
            Type your message here:
          </label>
          <input
            onChange={handleChange}
            value={text}
            id="send-text-input"
            type="text"
            placeholder="e.g., 'long text or url'"
            className="w-full px-4 py-2 border bg-[#FAFAFA] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent "
          />
          
          {error &&
          <p className="text-red-500 text-xm ">*Text cannot be empty. </p>}

          <div className="flex items-center mt-2 ">
            <button
              onClick={handleText}
              className="w-fit bg-blue-600 text-sm text-white py-2 px-3 cursor-pointer rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Send Message
            </button>
            {id && (
              <p className="w-fit mx-4 bg-green-600 text-sm text-white py-2 px-3 cursor-pointer rounded-md font-semibold hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                Your text id is: {id}{" "}
              </p>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">
            Messages are sent anonymously and are visible to nearby users for a
            limited time. Please be mindful and respectful with your
            transmissions.
          </p>
        </div>
      </Wrapper>
    </>
  );
};

export default SendText;
