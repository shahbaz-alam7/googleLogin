import { useState } from "react";
import ExcelRequestsImport from "./ExcelRequestsImport";
// google-login-rouge.vercel.app
import "./styles.css";

const SpreadSheet = () => {
  const [data, setData] = useState([]);

  const createRequests = () => {
    console.log(data);
  };

  return (
    <div>
      <ExcelRequestsImport uploadHandler={setData} />
      <button onClick={createRequests}>Add Data</button>
    </div>
  );
};

export default SpreadSheet;
