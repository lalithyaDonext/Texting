import React from "react";
import { ArrowLeft, Wallet } from "react-iconly";
import WalletDropDown from "../../Inputs/WalletDropDown";
import WalletInputField from "../../Inputs/WalletInputField";
import WalletOut from "../../Inputs/WalletOut";
import "./myWalletConvert.css";

const MyWalletConvert = () => {
  return (
    <div className="my-wallet-main-container">
      <div className="my-wallet-content-container">
        <div className="my-wallet-main-content-container">
          <div className="my-wallet-main-content-container-title">
            <div className="my-wallet-main-content-container-title-left-arrow">
              <ArrowLeft size={32} stroke="light" />
            </div>
            <div className="my-wallet-main-content-container-title-heading">
              My Wallet
            </div>
          </div>

          <div className="my-wallet-main-content-container-header-container">
            <div className="my-wallet-main-content-container-header">
              <div className="my-wallet-main-content-container-header-content">
                <div className="my-wallet-main-content-container-header-content-title">
                  Overview
                </div>

                <div className="my-wallet-main-content-container-header-content-title">
                  Transactions
                </div>

                <div className="my-wallet-main-content-container-header-content-title-convert">
                  Convert
                </div>

                <div className="my-wallet-main-content-container-header-content-title">
                  My NFTs
                </div>
              </div>

              <div className="my-wallet-main-content-container-header-button">
                <div className="my-wallet-main-content-container-header-button-text">
                  Add Money to wallet
                </div>
                <div className="my-wallet-main-content-container-header-button-icon">
                  <Wallet size={24} stroke="light" />
                </div>
              </div>
            </div>
          </div>

          <div className="my-wallet-main-content-container-table">
            <div className="my-wallet-main-content-container-table-fields">
              <div className="my-wallet-main-content-container-table-fields-input">
                <div className="my-wallet-main-content-container-table-fields-input-field1">
                  <div className="my-wallet-main-content-container-table-fields-input-text">
                    Select Main Currency from the list
                  </div>

                  <div className="my-wallet-main-content-container-table-fields-input-dropdown">
                    <WalletDropDown placeholder="USD (default)" option=" " />
                  </div>
                </div>

                <div className="my-wallet-main-content-container-table-fields-input-field1">
                  <div className="my-wallet-main-content-container-table-fields-input-text">
                    Convert to
                  </div>

                  <div className="my-wallet-main-content-container-table-fields-input-dropdown">
                    <WalletDropDown placeholder="BTC (default)" option=" " />
                  </div>
                </div>

                <div className="my-wallet-main-content-container-table-fields-input-field1">
                  <div className="my-wallet-main-content-container-table-fields-input-text">
                    Amount
                  </div>

                  <div className="my-wallet-main-content-container-table-fields-inputfield">
                    <WalletInputField placeholder="$23" />
                  </div>
                </div>
              </div>

              <div className="my-wallet-main-content-container-table-fields-output">
                <div className="my-wallet-main-content-container-table-fields-outpu-txt">
                  You will Recieve
                </div>

                <div className="my-wallet-main-content-container-table-fields-output-field">
                  <WalletOut placeholder="BTC 0.00000324" />
                </div>
              </div>
            </div>
          </div>

          <div className="my-wallet-main-content-container-buttons">
            <div className="my-wallet-main-content-container-buttons-submit">
              <div className="my-wallet-main-content-container-buttons-submit-title">
                No, go back
              </div>
            </div>

            <div className="my-wallet-main-content-container-buttons-convert">
              <div className="my-wallet-main-content-container-buttons-convert-title">
                Yes, Convert Now!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyWalletConvert;
