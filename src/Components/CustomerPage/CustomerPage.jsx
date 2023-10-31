import React, { useEffect, useState } from "react";
import CustomerList from "../CustomerList/CustomerList";

const CustomerPage = (props) => {
  const [customers, setCustomers] = useState([]);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch(
      "https://analyticsbackendort.azurewebsites.net/api/customers?pageSize=pageSize&page=page"
    )
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch(
      "https://analyticsbackendort.azurewebsites.net/api/accounts?pageSize=pageSize&page=page"
    )
      .then((response) => response.json())
      .then((data) => {
        setAccounts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <CustomerList Customers={customers} Accounts={accounts} />
    </div>
  );
};

export default CustomerPage;
