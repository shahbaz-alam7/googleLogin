import * as React from "react";
import * as ReactDOM from "react-dom";
import { PDFExport } from "@progress/kendo-react-pdf";
const PdfMaker = ({ sendData }) => {
  const pdfExportComponent = React.useRef(null);
  return (
    <div className="pdf-div">
      <div className="example-config">
        <button
          className="pdf-btn"
          onClick={() => {
            if (pdfExportComponent.current) {
              pdfExportComponent.current.save();
            }
          }}
        >
          Download
        </button>
      </div>

      <PDFExport paperSize="A4" margin="1cm" ref={pdfExportComponent}>
        <div className="pdf">
          <div className="pdf-top">
            <div className="company-detail">
              <div className="logo">
                <p>Your Logo</p>
              </div>
              <div className="detail-div">
                <h1>[you name/ company name]</h1>
                <p>[phone number]</p>
                <p>[email address or website]</p>
                <p>[website or company address]</p>
              </div>
            </div>
            <p className="heading">INVOICES</p>
          </div>
          <div className="pdf-mid">
            <div className="mid-left">
              <h2> Invoice to</h2>
              <h1>[ your client name ]</h1>
              <p>[ your client email address or post address ]</p>
            </div>
            <div className="mid-right">
              <div>
                <p className="name">Invoice</p>
                <p>0021</p>
              </div>
              <div>
                <p className="name">Date</p>
                <p>30/12/2022</p>
              </div>
              <div>
                <p className="name">Due Date</p>
                <p>30/12/2022</p>
              </div>
            </div>
          </div>
          <div className="pdf-item">
            <table>
              <thead>
                <tr className="item-head">
                  <th className="item1">
                    <p>Item Description</p>
                  </th>
                  <th className="item2">
                    <p>Quantity</p>
                  </th>
                  <th className="item2">
                    <p>Unit</p>
                  </th>
                  <th className="item2">
                    <p>Amount</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="item1">
                    <div>
                      <h1>[ Item title ]</h1>
                      <p>[ Item description Max 2 line ]</p>
                      <p>[ Item description Max 2 line ]</p>
                    </div>
                  </td>
                  <td className="item2">
                    <p>[ qty of item ]</p>
                  </td>
                  <td className="item2">
                    <p>$ 9,999,999.00</p>
                  </td>
                  <td className="item2">
                    <p>$ 9,999,999.00</p>
                  </td>
                </tr>
                {/*  dynamic data  */}
                {sendData.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td className="item1">
                        <div>
                          <h1>{item.id}</h1>
                          <p>{item.title}</p>
                          <p>{item.description}</p>
                        </div>
                      </td>
                      <td className="item2">
                        <p>{item.Qty}</p>
                      </td>
                      <td className="item2">
                        <p>{item.unit}</p>
                      </td>
                      <td className="item2">
                        <p>${item.price}</p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* <div className="items"></div> */}
          </div>
          <div className="total">
            <div className="t-left">
              <p>Stripe: [ your Stripe number ]</p>
              <p>Paypal: [ your PayPal Email address ]</p>
            </div>
            <div className="t-right">
              <div>
                <p>Subtotal</p>
                <p> $99,999,999.00</p>
              </div>
              <div className="discount">
                <p>Discount(20%)</p>
                <p> $99,999,999.00</p>
              </div>
              <div>
                <p>Tax:Vat(15%)</p>
                <p> $99,999,999.00</p>
              </div>
              <div className="t-total">
                <p>Total Due</p>
                <p> $99,999,999.00</p>
              </div>
            </div>
          </div>
          <div className="terms">
            <h1>Terms & Conditions / Notes</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </PDFExport>
    </div>
  );
};
export default PdfMaker;
