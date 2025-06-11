import axios from "axios";
import React, { useState } from "react";
import Wrapper from "../ui/Wrapper";

const backendUrl = import.meta.env.VITE_BACKEND_URL

const ScanText = () => {
  const [displayText, setDisplayText] = useState(false);
  const [textId, setTextId] = useState("");
  const [fetchedContent, setFetchedContent] = useState("");

  const handleGetTextClick = async () => {
    const getId = await axios.get( `${backendUrl}/text/v1/get`, {
      params: {
        text_id: textId,
      },
    });

    console.log(getId)

    if (getId.status == 200) {
      setFetchedContent(`${getId.data.text}`);
    } else if (textId === "hello-world") {
      setFetchedContent(
        "Hello there! This is a public broadcast message. Welcome to the world of instant text sharing. We're glad to have you here!"
      );
    } else {
      setFetchedContent(
        "Sorry, we couldn't find any text associated with that ID. Please double-check your input and try again."
      );
    }
    setDisplayText(true);
  };

  return (
    <>
      <Wrapper>
        <div className="h-fit w-full bg-green-100 p-8 rounded-lg shadow-xl mx-auto my-10">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">
            Instantly Retrieve Shared Texts
          </h2>
          <p className="text-gray-700 mb-6 text-center">
            Have a **Text ID**? Enter it below to magically pull up shared
            messages, notes, or even secret whispers sent directly to you. It's
            like having a digital key to unlock hidden conversations!
          </p>

          <div className="flex items-center space-x-3 mb-8 flex-col gap-2">
            <label htmlFor="get-text" className="sr-only">
              Enter Text ID
            </label>
            <input
              type="text"
              id="get-text"
              className="flex-grow px-4 py-2 border bg-[#FAFAFA] border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              placeholder="e.g., 123ABC789"
              value={textId}
              onChange={(e) => setTextId(e.target.value)}
            />
            <br />

            <button
              onClick={handleGetTextClick}
              className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
            >
              Get Text
            </button>
          </div>

          {displayText && (
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg animate-fade-in">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                Retrieved Text:
              </h3>
              <p className="text-gray-800 leading-relaxed">{fetchedContent}</p>
            </div>
          )}
        </div>
      </Wrapper>
    </>
  );
};

export default ScanText;
