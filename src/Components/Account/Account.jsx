import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Customer = (props) => {
  const { id } = useParams();
  const [account, setAccount] = useState([]);

  useEffect(() => {
    fetch(`https://analyticsbackendort.azurewebsites.net/api/accounts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAccount(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div>
        <ul key={account._id}>
          <li>
            <strong>limit:</strong> {account.limit}
          </li>
          <li>
            <strong>products:</strong> {JSON.stringify(account.products)}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Customer;
