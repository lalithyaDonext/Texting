import React, { useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

interface PopupMessageProps {
  message: string;
}

const PopupMessage: React.FC<PopupMessageProps> = ({ message }) => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <div className="bg-white w-[400px] h-[400px] p-6 rounded-lg shadow-lg">
            <button
              className="absolute w-5 h-5  mt-1 ml-[340px] text-[gray] hover:text-gray-700"
              onClick={handleClose}
            >
              < AiOutlineCloseCircle/>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg> */}
            </button>
            <p>{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupMessage;
