import React from 'react';
import './SellerInbox.css';
import userimage from '../../images/Seller/UserProfile.png';

const SellerInbox = () => {
  return (
    <div className='inbox-view-container'>
      <div className='inbox-view-leftside'>
        <img src={userimage} alt='' width={75} height={75} style={{ width: '75px', height: '75px' }} />
      </div>
      <div className='inbox-view-details'>
        <div className='inbox-view-title-container'>
          <div className='inbox-view-title'>
            Bessie Cooper
          </div>
          <div className='inbox-count'>
            1
          </div>
        </div>
        <div className='inbox-view-content'>
          Et ullamcorper vel iaculis bibendum nisl amet leo.
        </div>
      </div>
      <div className='inbox-view-rightside'>
        <button className='delete-button'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M12.2454 22C10.8904 22 9.56938 21.985 8.26238 21.958C6.59038 21.925 5.43338 20.841 5.24438 19.129C4.92938 16.289 4.39038 9.59503 4.38538 9.52803C4.35138 9.11503 4.65938 8.75303 5.07238 8.72003C5.47938 8.70903 5.84738 8.99503 5.88038 9.40703C5.88538 9.47503 6.42338 16.146 6.73538 18.964C6.84238 19.937 7.36738 20.439 8.29338 20.458C10.7934 20.511 13.3444 20.514 16.0944 20.464C17.0784 20.445 17.6104 19.953 17.7204 18.957C18.0304 16.163 18.5704 9.47503 18.5764 9.40703C18.6094 8.99503 18.9744 8.70703 19.3834 8.72003C19.7964 8.75403 20.1044 9.11503 20.0714 9.52803C20.0654 9.59603 19.5234 16.307 19.2114 19.122C19.0174 20.869 17.8634 21.932 16.1214 21.964C14.7884 21.987 13.5024 22 12.2454 22" fill="#CBCBCB" />
            <path fillRule="evenodd" clipRule="evenodd" d="M20.708 6.98932H3.75C3.336 6.98932 3 6.65332 3 6.23932C3 5.82532 3.336 5.48932 3.75 5.48932H20.708C21.122 5.48932 21.458 5.82532 21.458 6.23932C21.458 6.65332 21.122 6.98932 20.708 6.98932" fill="#CBCBCB" />
            <path fillRule="evenodd" clipRule="evenodd" d="M17.4386 6.98931C16.3006 6.98931 15.3126 6.17831 15.0886 5.06231L14.8456 3.84631C14.7946 3.66131 14.5836 3.50031 14.3436 3.50031H10.1106C9.87063 3.50031 9.65962 3.66131 9.59862 3.89231L9.36562 5.06231C9.14262 6.17831 8.15363 6.98931 7.01562 6.98931C6.60162 6.98931 6.26562 6.65331 6.26562 6.23931C6.26562 5.82531 6.60162 5.48931 7.01562 5.48931C7.44162 5.48931 7.81162 5.18531 7.89562 4.76731L8.13863 3.55131C8.38563 2.61931 9.19263 2.00031 10.1106 2.00031H14.3436C15.2616 2.00031 16.0686 2.61931 16.3056 3.50631L16.5596 4.76731C16.6426 5.18531 17.0126 5.48931 17.4386 5.48931C17.8526 5.48931 18.1886 5.82531 18.1886 6.23931C18.1886 6.65331 17.8526 6.98931 17.4386 6.98931" fill="#CBCBCB" />
          </svg>
        </button>
        <button className='archived-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g clipPath="url(#clip0_1509_54471)">
              <path d="M20.54 5.23L19.15 3.55C18.88 3.21 18.47 3 18 3H6C5.53 3 5.12 3.21 4.84 3.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V6.5C21 6.02 20.83 5.57 20.54 5.23ZM6.24 5H17.76L18.57 5.97H5.44L6.24 5ZM5 19V8H19V19H5ZM13.45 10H10.55V13H8L12 17L16 13H13.45V10Z" fill="#4A037D" />
            </g>
            <defs>
              <clipPath id="clip0_1509_54471">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SellerInbox;
