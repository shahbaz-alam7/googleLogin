import "./App.css";
import { useState } from "react";
import Google from "./components/Google";
import PdfMaker from "./components/PdfMaker";
import { data } from "./components/API";
function App() {
  const [sendData, setSendData] = useState(data[0]);
  const [toggle, setToggle] = useState(false);

  const showInvoices = (i) => {
    setSendData(data[i]);
    console.log(i);
    setToggle(true);
  };
  return (
    <div className="app">
      {/* <Google /> */}
      {data.map((item, i) => {
        return (
          <button
            key={i}
            onClick={() => {
              showInvoices(i);
            }}
          >
            Show Invoices {i+1}
          </button>
        );
      })}
      {toggle && <PdfMaker sendData={sendData} />}
    </div>
  );
}

export default App;
// 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
// 685827706441-6gsel3e5uq4edb9qk9ui9nthf7bevjac.apps.googleusercontent.com
