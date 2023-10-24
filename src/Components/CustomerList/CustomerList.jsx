import React from "react";
import Customer from "../Customer/Customer";

const CustomerList = (props) => {
  const CuentasConData = (customer) => {
    const cuentasUp = customer.accounts.map((accountId) => {
      const matchedAccount = props.Accounts.find(
        (account) => account.account_id === accountId
      );
      return matchedAccount ? matchedAccount : accountId;
    });

    return {
      accounts: cuentasUp,
    };
  };

  return (
    <ul>
      {props.Customers.map((customer) => {
        const cuentasUp = CuentasConData(customer);

        return (
          <li key={`customerli${customer._id}`}>
            <Customer
              _id={customer._id}
              username={customer.username}
              name={customer.name}
              address={customer.address}
              birthdate={customer.birthdate}
              email={customer.email}
              accounts={cuentasUp.accounts}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CustomerList;
