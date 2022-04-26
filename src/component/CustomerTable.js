import React from "react";
import dataExport from "../static/data/accounts";
import CustomButton from "./Button";
import ButtonIcon from "../assets/acccounts/Icon.svg";

const getTables = (data) => {
  let content = [];

  for (let i = 0; i < data?.length; i++) {
    const keys = Object.keys(data[i]);
    console.log({ keys });
    content.push(
      <div key={i}>
        <tr className="account-table-row d-flex justify-content-center align-items-center mb_20 pt-2 pb-2">
          <td>
            <div className="account-container">
              <img src={data[i].picture} alt="imge" />
            </div>
          </td>
          <td>
            <div className="account-tables-head d-flex justify-content-center flex-column align-items-start mr_140">
              <h4>{data[i].cardNumber}</h4>
              <p>Card number</p>
            </div>
          </td>
          <td>
            <div className="account-tables-head d-flex justify-content-center flex-column align-items-start mr-3">
              <h4>{data[i].balance}</h4>
              <p>Balance</p>
            </div>
          </td>
          <td>
            <div className="account-tables-head d-flex justify-content-center flex-column align-items-start mr-3">
              <h4>{data[i].blockAmount}</h4>
              <p>Blocked amount</p>
            </div>
          </td>
          <td>
            <div className="account-tables-head d-flex justify-content-center flex-column align-items-start mr-3">
              <h4>{data[i].valid}</h4>
              <p>Valid</p>
            </div>
          </td>
          <td>
            <div>Active</div>
          </td>
          <td>
            <img src={ButtonIcon} alt="icons" />
          </td>
        </tr>
      </div>
    );
  }
  return content;
};

const CustomerTable = () => {
  return (
    <div className="account-main-container pt-3 pl-4 pr-4 mt_20 mb_10">
      <div className="mb_20 d-flex justify-content-between">
        <h4>Deposits</h4>
        <CustomButton type="dashboard-account">+ Apply new card</CustomButton>
      </div>
      <table> {getTables(dataExport.CustomerData)}</table>
    </div>
  );
};

export default CustomerTable;
