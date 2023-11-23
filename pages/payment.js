import React from "react";
import "../tailwind.css";

function Payment() {
  return (
    <div className="min-h-screen">
      <nav className="text-center h-[72px] pt-[22px] border-b-2 border-[#E9EBED]">CineMax</nav>
      <div className="flex flex-row justify-evenly px-20">
        <div className="w-8/12 flex flex-col py-20">
          <h2>Payment Method</h2>{" "}
          <input className="bg-[#F9F9F9] border-1 rounded-3xl max-w-[588px] mt-1 py-2 pl-4" type="text" />{" "}
          <p>Or checkout using a credit card</p>
          <div className="flex flex-col">
            <label>Cardholder Name</label>
            <input className="bg-[#F9F9F9] border-1 rounded-3xl max-w-[588px] mt-1 py-2 pl-4" type="text" />
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <label>Card Number</label>
              <input
                className="bg-[#F9F9F9] border-1 rounded-3xl max-w-[588px] mt-1 py-2 pl-4 min-w-[264px]"
                type="number"
                placeholder="Ex:  31111 1111 1111 1111"
              />
            </div>

            <div className="flex flex-col">
              <label>Expiration</label>
              <input
                className="bg-[#F9F9F9] border-1 rounded-3xl min-w-[138px] mt-1 py-2 pl-4 "
                type=""
                placeholder="MM/YY"
              />
            </div>

            <div className="flex flex-col">
              <label>CVV</label>
              <input className="bg-[#F9F9F9] border-1 rounded-3xl min-w-[138px] mt-1 py-2 pl-4 " type="number" />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Postal Code</label>
            <input
              className="bg-[#F9F9F9] border-1 rounded-3xl max-w-[588px] mt-1 py-2 pl-4"
              type="number"
              placeholder="Postal or ZIP code"
            />
          </div>
        </div>
        <div className="w-4/12 flex flex-col h-screen border-l-2 border-[#E9EBED] pl-14 py-20">
          <div className="flex flex-row justify-between">
            <p>Subtotal</p>
            <p>$4.99</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Plan Type</p>
            <p>Monthly</p>
          </div>
          <div className="flex flex-row justify-between">
            <p>Monthly plan discount</p>
            <p>-$5</p>
          </div>
          <div className="border-2 border-[#E9EBED] my-7"></div>
          <div className="flex flex-row justify-between justify-between mb-7">
            <p>Billed Now</p>
            <p className="text-[#B43FEB] font-semibold">$35</p>
          </div>
          <p className="mb-16">
            You will be charged $5 every yearly thereafter while the subscription is active. Cancel any time.
          </p>
          <button className="py-4 px-10 bg-[#B43FEB] rounded-3xl text-white" type="submit">
            Pay
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
