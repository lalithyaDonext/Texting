import React from "react";
import "./SellerPostInDetail.css";
import { ArrowLeft } from "react-iconly";
import postLogo from "../../images/Seller/Image (4).png";
import postImage from "../../images/Seller/the-dk-photography-NUoPWImmjCU-unsplash 1 (1).png";
import chatimg from "../../images/Seller/IMage (6).png";

const SellerPostInDetail = () => {
  return (
    <div className="seller-post-detail-main-wrapper">
      <div className="seller-post-detail-Back-nav">
        <ArrowLeft size={32} stroke="light" />
      </div>

      <div className="seller-post-detail-container">
        <div className="seller-post-detail-container-left">
          <div
            className="seller-post-detail-container-left-Header"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              className="seller-post-detail-container-left-Header-img"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <img src={postLogo} alt="" />
              <span className="seller-post-detail-container-left-Header-title">
                FLEX
              </span>
            </div>
            <div
              className="seller-post-detail-container-left-Header-img-btn"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13.7461 20.4428H20.9987"
                  stroke="#130F26"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.78 3.79479C13.5557 2.86779 14.95 2.73186 15.8962 3.49173C15.9485 3.53296 17.6295 4.83879 17.6295 4.83879C18.669 5.46719 18.992 6.80311 18.3494 7.82259C18.3153 7.87718 8.81195 19.7645 8.81195 19.7645C8.49578 20.1589 8.01583 20.3918 7.50291 20.3973L3.86353 20.443L3.04353 16.9723C2.92866 16.4843 3.04353 15.9718 3.3597 15.5773L12.78 3.79479Z"
                  stroke="#130F26"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.0195 6.00098L16.4718 10.1881"
                  stroke="#130F26"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="seller-post-detail-container-left-Header-img-btn-span">
                Edit
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4.46967 7.96967C4.73594 7.7034 5.1526 7.6792 5.44621 7.89705L5.53033 7.96967L12 14.439L18.4697 7.96967C18.7359 7.7034 19.1526 7.6792 19.4462 7.89705L19.5303 7.96967C19.7966 8.23594 19.8208 8.6526 19.6029 8.94621L19.5303 9.03033L12.5303 16.0303C12.2641 16.2966 11.8474 16.3208 11.5538 16.1029L11.4697 16.0303L4.46967 9.03033C4.17678 8.73744 4.17678 8.26256 4.46967 7.96967Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className="seller-post-detail-container-left-Image-container">
            <img src={postImage} alt="" width={267} height={296} />
          </div>

          <div className="seller-post-detail-container-left-product-name">
            <span>Shiny Navy Sneakers</span>
            <button
              className="seller-post-detail-container-left-product-availabletime"
              style={{
                width: "127px",
                height: "40px",
                justifyContent: "center",
                gap: "21px",
                padding: "8px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22Z"
                  fill="#4A037D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.4302 15.6925C15.2992 15.6925 15.1672 15.6585 15.0462 15.5875L11.2762 13.3385C11.0502 13.2025 10.9102 12.9575 10.9102 12.6935V7.84546C10.9102 7.43146 11.2462 7.09546 11.6602 7.09546C12.0752 7.09546 12.4102 7.43146 12.4102 7.84546V12.2675L15.8152 14.2975C16.1702 14.5105 16.2872 14.9705 16.0752 15.3265C15.9342 15.5615 15.6852 15.6925 15.4302 15.6925Z"
                  fill="#4A037D"
                />
              </svg>
              <span className="seller-post-detail-container-left-product-availabletime-span">
                09h 30 m
              </span>
            </button>
          </div>
          <div className="seller-post-detail-container-left-product-description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh cras
              dictum purus quis erat. Sapien, erat ultricies hac imperdiet amet,
              magna sed. Nibh tincidunt commodo potenti maecenas ornare sagittis
              senectus. A netus odio facilisis arcu ut metus. Dui, sit morbi
              fames vel felis, ullamcorper volutpat id vel. Sit tincidunt fusce
              ut velit eros egestas. Ipsum facilisi mattis velit tortor, mauris
              maecenas morbi. Massa, posuere tristique aliquet vitae mi tellus
              mus. Praesent felis eu urna lacus, magna. Ornare sit mi mattis.
            </p>
          </div>
        </div>
        <div className="seller-post-detail-container-right">
          <div className="seller-post-detail-container-right-Header-title">
            Shiny Navy Sneakers
            <span
              className="seller-post-detail-container-right-Header-price"
              style={{ color: "#4A037D", fontWeight: "700" }}
            >
              $ 185.20
            </span>
          </div>
          <div className="seller-post-detail-container-right-post-operators">
            <div className="seller-post-detail-container-right-post-fav">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.4341 3.85523C25.4069 3.85523 26.3782 3.99243 27.3016 4.30231C32.9919 6.15231 35.0423 12.3961 33.3296 17.8536C32.3583 20.6424 30.7704 23.1877 28.6907 25.2674C25.7137 28.1504 22.4469 30.7095 18.9304 32.9141L18.545 33.1469L18.1441 32.8987C14.6153 30.7095 11.33 28.1504 8.32526 25.252C6.25943 23.1723 4.66997 20.6424 3.68331 17.8536C1.94122 12.3961 3.99164 6.15231 9.7436 4.26993C10.1907 4.11577 10.6516 4.00785 11.1141 3.94773H11.2991C11.7323 3.88452 12.1625 3.85523 12.5941 3.85523H12.7637C13.735 3.88452 14.6754 4.0541 15.5865 4.36398H15.6775C15.7391 4.39327 15.7854 4.42564 15.8162 4.45493C16.1569 4.56439 16.4791 4.68773 16.7875 4.85731L17.3733 5.11939C17.5149 5.19489 17.6738 5.31025 17.8111 5.40995C17.8981 5.47312 17.9764 5.53 18.0362 5.56648C18.0614 5.58132 18.0869 5.59624 18.1127 5.61129C18.2449 5.68846 18.3826 5.76884 18.4987 5.85785C20.2115 4.54898 22.2912 3.83981 24.4341 3.85523ZM28.535 14.9552C29.1671 14.9383 29.7066 14.4311 29.7529 13.782V13.5986C29.7991 11.4387 28.4903 9.48231 26.5 8.72689C25.8679 8.50952 25.1741 8.85023 24.9429 9.49773C24.7271 10.1452 25.0662 10.8544 25.7137 11.0841C26.7019 11.4541 27.3633 12.4269 27.3633 13.5045V13.5523C27.334 13.9054 27.4404 14.2461 27.6562 14.5081C27.8721 14.7702 28.1958 14.9229 28.535 14.9552Z"
                  fill="#4A037D"
                />
              </svg>
              <span className="seller-post-detail-container-right-post-fav">
                123
              </span>
            </div>
            <div className="seller-post-detail-container-right-post-fav">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.4987 5.39575C11.2729 5.39575 5.39453 11.2741 5.39453 18.4999C5.39453 25.7257 11.2729 31.6041 18.4987 31.6041C25.7245 31.6041 31.6029 25.7257 31.6029 18.4999C31.6029 11.2741 25.7245 5.39575 18.4987 5.39575ZM18.4987 33.9166C9.99795 33.9166 3.08203 27.0007 3.08203 18.4999C3.08203 9.99917 9.99795 3.08325 18.4987 3.08325C26.9994 3.08325 33.9154 9.99917 33.9154 18.4999C33.9154 27.0007 26.9994 33.9166 18.4987 33.9166Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.5845 20.0628C23.732 20.0628 23.0352 19.3737 23.0352 18.5212C23.0352 17.6686 23.7181 16.9795 24.5691 16.9795H24.5845C25.4371 16.9795 26.1262 17.6686 26.1262 18.5212C26.1262 19.3737 25.4371 20.0628 24.5845 20.0628Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18.4033 20.0628C17.5508 20.0628 16.8555 19.3737 16.8555 18.5212C16.8555 17.6686 17.5369 16.9795 18.3894 16.9795H18.4033C19.2558 16.9795 19.945 17.6686 19.945 18.5212C19.945 19.3737 19.2558 20.0628 18.4033 20.0628Z"
                  fill="black"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.2252 20.0628C11.3726 20.0628 10.6758 19.3737 10.6758 18.5212C10.6758 17.6686 11.3587 16.9795 12.2113 16.9795H12.2252C13.0777 16.9795 13.7668 17.6686 13.7668 18.5212C13.7668 19.3737 13.0777 20.0628 12.2252 20.0628Z"
                  fill="black"
                />
              </svg>
              <span className="seller-post-detail-container-right-post-fav">
                243
              </span>
            </div>
          </div>
          <div className="seller-post-detail-container-right-chat-container">
            <div className="seller-post-detail-container-right-chat-container-header">
              <p>Open Chats</p>
            </div>
            <div className="seller-post-detail-container-right-chat">
              <div>
                <img src={chatimg} alt="" />
              </div>
              <div className="seller-post-detail-container-right-chat-content-container">
                <div className="seller-post-detail-container-right-chat-username">
                  Savannah Nguyen
                  <span className="seller-post-detail-container-right-chat-time">
                    05th Sep
                  </span>
                </div>
                <div className="seller-post-detail-container-right-chat-msg">
                  Savannah Nguyen
                </div>
              </div>
            </div>
            <div className="seller-post-detail-container-right-chat">
              <div>
                <img src={chatimg} alt="" />
              </div>
              <div className="seller-post-detail-container-right-chat-content-container">
                <div className="seller-post-detail-container-right-chat-username">
                  Savannah Nguyen
                  <span className="seller-post-detail-container-right-chat-time">
                    05th Sep
                  </span>
                </div>
                <div className="seller-post-detail-container-right-chat-msg">
                  Savannah Nguyen
                </div>
              </div>
            </div>
            <div className="seller-post-detail-container-right-chat">
              <div>
                <img src={chatimg} alt="" />
              </div>
              <div className="seller-post-detail-container-right-chat-content-container">
                <div className="seller-post-detail-container-right-chat-username">
                  Savannah Nguyen
                  <span className="seller-post-detail-container-right-chat-time">
                    05th Sep
                  </span>
                </div>
                <div className="seller-post-detail-container-right-chat-msg">
                  Savannah Nguyen
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerPostInDetail;
