import "./App.css";
import { useState } from "react";
import Google from "./components/Google";
import { data } from "./components/API";
import SpreadSheet from "./components/SpreadSheet";
import Image from "./components/Image";
import Main from "./diy/Main";
import FontStyleComp from "./diy/FontStyleComp";
import Frames from "./diy/Frames";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  const [sendData, setSendData] = useState(data[0]);
  const [toggle, setToggle] = useState(true);

  const showInvoices = (i) => {
    setSendData(data[i]);
    console.log(i);
    setToggle(true);
  };
  return (
    <>
      <BrowserRouter>
         <Navbar />
        <Routes>
           <Route path="/" element={<Main />} />
           <Route path="/google" element={<Google />} />
           <Route path="/sheet" element={<SpreadSheet />} />
           <Route path="/img" element={<Image />} />
           <Route path="/frame" element={<Frames />} />
           <Route path="/font" element={<FontStyleComp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
