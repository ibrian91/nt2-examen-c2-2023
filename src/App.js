import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerPage from "./Components/CustomerPage/CustomerPage";
import Account from "./Components/Account/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerPage />} />
        <Route path="/accounts/:accountId" element={<Account />} />
        <Route path="/account/:customerId/:accountId" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
