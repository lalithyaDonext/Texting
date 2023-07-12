import React, { useState } from "react";
import { Send, ArrowLeft, CloseSquare, Upload } from "react-iconly";
import Live from "../../Inputs/Live";
import postImage from "../../images/DashbordSeller/the-dk-photography-NUoPWImmjCU-unsplash 1.png";
import { IoIosArrowDown } from "react-icons/io";
import { BsCameraVideo, BsCardImage } from "react-icons/bs";
import SelectInput from "../../Inputs/SelectInput";
import InputSellerTextField from "../../Inputs/inputSellerTextField";
import SellerproductInput from "../../Inputs/sellerproductInput";
import SmallDropdown from "../../Inputs/SmallDropdown";
import SmallInput from "../../Inputs/smallInput";
import "./editPostStatus.css";

const EditPostStatus = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="seller-post-container mb-[40px]">
      <div className="seller-post-title">
        <div className="seller-post-back-nav">
          <ArrowLeft size={32} stroke="light" />
        </div>
        <div className="seller-post-title-content">
          {/* Add New Post */}
          Edit - Shiny Navy Sneakers
        </div>
        <div className="live">
          <Live />
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
        <div className="seller-post-main-card">
          <div className="post-main-card-two">
            <div className="post-main-card-content">
              <div className="image-view-post">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <CloseSquare size={17} stroke="light" />

                  <img
                    src={postImage}
                    alt="Product Image"
                    width="112"
                    height="134"
                    style={{ marginTop: "-16px" }}
                  />
                </div>
                <div className="upload-details">
                  <span style={{ fontSize: "16px", fontWeight: "400" }}>
                    Change Product Image
                  </span>
                  <div className="dropdown-button" onClick={toggleDropdown}>
                    <Upload size={24} />
                    <span> </span>
                    <span style={{ marginLeft: "14px" }}>Upload Image</span>
                    <div className={`dropdown ${isOpen ? "open" : ""}`}>
                      <IoIosArrowDown className="arrow-icon" size={24} />
                      <ul className="dropdown-ui">
                        <li className="dropdown-li">
                          <BsCardImage />
                          Upload Image
                        </li>
                        <li className="dropdown-li">
                          <BsCameraVideo />
                          Upload Single Video
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="Input-set-seller-post">
                <div className="input-set-one">
                  <div>
                    <div className="label-one">
                      1.
                      <span> </span>
                      Select Main Category*
                    </div>
                    <div className="Seller-post-input">
                      <SelectInput placeholder="Clothes" option="Clothes" />
                    </div>
                  </div>
                  <div>
                    <div className="label-one">
                      2.
                      <span> </span>
                      Select Sub Category*
                    </div>
                    <div className="Seller-post-input">
                      <SelectInput
                        placeholder="Men’s Clothes"
                        option="Men’s Clothes"
                      />
                    </div>
                  </div>
                </div>
                <div className="input-set-two">
                  <div>
                    <div className="label-one">
                      3.
                      <span> </span>
                      Enter Product Details
                    </div>
                    <div className="Seller-post-input">
                      <InputSellerTextField placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra vivamus habitant hac a quis feugiat eu purus. " />
                    </div>
                  </div>
                </div>
                <div className="input-set-three">
                  <div>
                    <div className="label-one">
                      4.
                      <span> </span>
                      Add Product Variations
                    </div>
                    <div className="Seller-post-input">
                      <SellerproductInput placeholder="Click here to add variations of your product " />
                    </div>
                  </div>
                </div>
                <div className="input-set-four">
                  <div>
                    <div className="label-one">
                      5.
                      <span> </span>
                      Enter Selling Price*
                    </div>
                    <div className="Seller-post-input">
                      <SmallDropdown />
                    </div>
                  </div>
                  <div>
                    <div className="Seller-post-input-one">
                      <SmallInput placeholder="180.00" />
                    </div>
                  </div>
                  <div className="seller-offr-input">
                    <div className="label-one">
                      5.
                      <span> </span>
                      Enter Offer
                    </div>
                    <div className="Seller-post-input">
                      <SmallInput placeholder="Enter offers if you have any" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="seller-post-button">
          <button className="post-button">
            {/* Post Product */}
            <div className="post-button-cont" style={{ marginRight: "10px" }}>
              Update Product
            </div>

            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPostStatus;
