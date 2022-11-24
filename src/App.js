import "./App.css";
import { useState } from "react";
import Google from "./components/Google";
import PdfMaker from "./components/PdfMaker";
import { data } from "./components/API";
import SpreadSheet from "./components/SpreadSheet";
import Image from "./components/Image";
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
      {/* {data.map((item, i) => {
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
      {toggle && <PdfMaker sendData={sendData} />} */}
      <SpreadSheet />
      {/* <Image/> */}
    </div>
  );
}

export default App;