import React from "react";
import { Link } from "react-router-dom";

const Customer = (props) => {
  return (
    <li>
      <div>
        <div>
          <h2>{props.username}</h2>
          <h3>{props.name}</h3>
          <h3>{props.address}</h3>
          <h3>{props.birthdate}</h3>
          <h3>{props.email}</h3>
          <h3>Cuentas: </h3>

          <ul>
            {props.accounts.map((account) => (
              <li>
                <Link to={`/accounts/${account._id}`}>
                  Ver detalles de la cuenta {account.account_id}
                  {""}
                  {account.limit < 10000
                    ? "(el limite es inferior a 10000)"
                    : ""}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Customer;
