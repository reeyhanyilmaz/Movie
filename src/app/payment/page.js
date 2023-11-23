"use client"
import React, { useState, useEffect } from "react";

function Payment() {
  const [formData, setFormData] = useState({
    cardholdername: "",
    cardnumber: "",
    expiration: "",
    cvv: "",
    postalcode: "",
  });

  const [errors, setErrors] = useState({});
  console.log("error :>> ", errors);
  //input degisimlerini yakalayıp öncekinin üzerine degisen kısmı güncelliyor
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    //name input türü, value input verisi
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // {cardnumber: value}
    }));

    const maskCreditCardNumber = (number)=>{
      const visibleDigits = 4;
      const masketNumber = "*".repeat(number.length-visibleDigits)+ number.slice(-visibleDigits);
      return masketNumber;
    }

    validateForm();
  };

  const validateForm = () => {
    const newError = {};

    if (formData.cardholdername.length < 1 || formData.cardholdername.length > 32) {
      console.log("yes :>> ");
      newError.cardholdername = "Cardholdername min must be 1, max 32 characters.";
    }

    if (formData.cardnumber.length != 16) {
      newError.cardnumber = "Card number min must be 16 characters.";
    }

    setErrors(newError);
  };

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
            <input
              className="bg-[#F9F9F9] border-1 rounded-3xl max-w-[588px] mt-1 py-2 pl-4"
              type="text"
              name="cardholdername"
              value={formData.cardholdername}
              onChange={handleInputChange}
            />
            {errors.cardholdername && <p className="text-rose-600">{errors.cardholdername}</p>}
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col">
              <label>Card Number</label>
              <input
                className="bg-[#F9F9F9] border-1 rounded-3xl max-w-[588px] mt-1 py-2 pl-4 min-w-[264px]"
                type="number"
                placeholder="Ex:  31111 1111 1111 1111"
                name="cardnumber"
                value={formData.cardnumber}
                onChange={handleInputChange}
              />
              {errors.cardnumber && <p className="text-rose-600">{errors.cardholdername}</p>}
            </div>

            <div className="flex flex-col">
              <label>Expiration</label>
              <input
                className="bg-[#F9F9F9] border-1 rounded-3xl min-w-[138px] mt-1 py-2 pl-4 "
                type="text"
                placeholder="MM/YY"
                name="expiration"
                value={formData.expiration}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex flex-col">
              <label>CVV</label>
              <input
                className="bg-[#F9F9F9] border-1 rounded-3xl min-w-[138px] mt-1 py-2 pl-4 "
                type="number"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label>Postal Code</label>
            <input
              className="bg-[#F9F9F9] border-1 rounded-3xl max-w-[588px] mt-1 py-2 pl-4"
              type="number"
              placeholder="Postal or ZIP code"
              name="postalcode"
              value={formData.postalcode}
              onChange={handleInputChange}
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
