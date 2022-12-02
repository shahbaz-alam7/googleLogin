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
    <div className="box">
      <ExcelRequestsImport uploadHandler={setData} />
      <button className="btn" onClick={createRequests}>
        Add Data
      </button>
    </div>
  );
};

export default SpreadSheet;
