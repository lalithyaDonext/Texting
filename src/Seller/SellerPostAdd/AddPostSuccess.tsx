import React, { useState } from "react";
import { ArrowLeft, Send } from "react-iconly";
import PostSelect from "../../Inputs/PostSelect";
import PostProductInput from "../../Inputs/PostProductInput";
import PostSellerTextField from "../../Inputs/PostSellerTextField";
import SmallPostInput from "../../Inputs/SmallPostInput";
import Percentage from "../../Inputs/Presentage";
import CurrencyDropDown from "../../Inputs/CurrencyDropDown";
import "./addPostSuccess.css";

const AddPostSuccess = () => {
  return (
    <div className="seller-post-container">
      <div className="seller-post-title">
        <div className="seller-post-back-nav">
          <ArrowLeft size={32} stroke="light" />
        </div>
        <div className="new-post-title-content">Add New Post</div>
      </div>
      <div className="seller-post-main-card">
        <div className="post-main-card">
          <div className="post-main-card-content">
            <div className="Input-set-seller-post">
              <div className="input-set-one">
                <div>
                  <div className="post-label-one">
                    <span className="lable-number">1.</span>
                    <span> </span>
                    Select Main Category*
                  </div>
                  <div className="Seller-post-input">
                    <PostSelect placeholder="Clothes" option="Clothes" />
                  </div>
                </div>
                <div>
                  <div className="post-label-one">
                    <span className="lable-number">2.</span>
                    <span> </span>
                    Select Sub Category*
                  </div>
                  <div className="Seller-post-input">
                    <PostSelect
                      placeholder="Men’s Clothes, Women Clothes, T-shirts"
                      option="Men’s Clothes"
                    />
                  </div>
                </div>
              </div>
              <div className="input-set-two">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className="post-label-one">
                    <span className="lable-number">3.</span>
                    <span> </span>
                    Enter Product Details
                  </div>
                  <div className="Seller-post-input">
                    <PostSellerTextField placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra vivamus habitant hac a quis feugiat eu purus. " />
                  </div>
                </div>
              </div>
              <div className="input-set-three">
                <div>
                  <div className="post-label-one">
                    <span className="lable-number">4.</span>
                    <span> </span>
                    Add Product Variations
                  </div>
                  <div className="Seller-post-input">
                    <PostProductInput placeholder="Click here to add variations of your product " />
                  </div>
                </div>
              </div>
              <div className="input-set-four">
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div className="post-label-one">
                    <span className="lable-number">5.</span>
                    <span> </span>
                    Enter Selling Price*
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      gap: "25px",
                    }}
                  >
                    <div className="Seller-post-input">
                      <CurrencyDropDown />
                    </div>

                    <div className="Seller-post-input-one">
                      <SmallPostInput placeholder="Enter Selling Price" />
                    </div>
                  </div>
                </div>
                <div className="seller-offr-input">
                  <div className="post-label-one">
                    <span className="lable-number">5.</span>
                    <span> </span>
                    Enter Discount
                  </div>
                  <div className="Seller-post-input">
                    <Percentage
                      placeholder="Enter discount percentage or price"
                      option="%"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="seller-post-next-button">
        <button className="next-button">
          Post Product <Send size={24} />
        </button>
      </div>
    </div>
  );
};

export default AddPostSuccess;
