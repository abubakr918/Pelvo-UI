import React from "react";
import dataExport from "../static/data/accounts";
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
            <div className="account-tables-head d-flex justify-content-center flex-column align-items-start mr-4">
              <h4>{data[i].accountNumber}</h4>
              <p>Account number</p>
            </div>
          </td>
          <td>
            <div className="account-tables-head d-flex justify-content-center flex-column align-items-start mr-3">
              <h4>{data[i].accountHolder}</h4>
              <p>Account holder</p>
            </div>
          </td>
          <td>
            <div className="account-tables-head d-flex justify-content-center flex-column align-items-start mr-3">
              {" "}
              <h4>{data[i].accountType}</h4>
              <p>Account type</p>
            </div>
          </td>
          <td>
            <div className="account-tables-head d-flex justify-content-center flex-column align-items-start mr-3">
              <h4>{data[i].IBAN}</h4>
              <p>IBAN</p>
            </div>
          </td>
          <td>
            <div className="account-tables-head d-flex justify-content-center flex-column align-items-start mr-3">
              <h4>{data[i].Balance}</h4>
              <p>Balance</p>
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

const AccountTable = () => {
  return (
    <div className="account-main-container pt-3 pl-4 pr-4 mt_20">
      <div className="mb_20 d-flex justify-content-between">
        <h4>Your accounts</h4>
        <p>Open new card</p>
      </div>
      <table> {getTables(dataExport.AccountsData)}</table>
    </div>
  );
};

export default AccountTable;
