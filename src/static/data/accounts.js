import Nordea from "../../assets/acccounts/nordea.svg";
import Swebank from "../../assets/acccounts/Swedbank.svg";
import None from "../../assets/acccounts/non.svg";
const AccountsData = [
  {
    picture: Swebank,
    accountNumber: "3210 **** **** 7890",
    accountHolder: "Davis Albi",
    accountType: "8839390",
    IBAN: "DS94994949",
    Balance: "€ 4,000.00",
  },
  {
    picture: Nordea,
    accountNumber: "3210 **** **** 7890",
    accountHolder: "Dorito Mecki",
    accountType: "8839390",
    IBAN: "DS94994949",
    Balance: "€ 4,000.00",
  },
  {
    picture: None,
    accountNumber: "3210 **** **** 7890",
    accountHolder: "Mike Salva",
    accountType: "8839390",
    IBAN: "DS94994949",
    Balance: "€ 4,000.00",
  },
];

const CustomerData = [
  {
    picture: Swebank,
    cardNumber: "3210 **** **** 7890",
    balance: "$88,200.00",
    blockAmount: "$1,200.00",
    valid: "06/22",
  },
  {
    picture: Nordea,
    cardNumber: "3210 **** **** 7890",
    balance: "$64,120.50",
    blockAmount: "$1,200.00",
    valid: "06/22",
  },
];

const dataExport = {
  CustomerData,
  AccountsData,
};
export default dataExport;
