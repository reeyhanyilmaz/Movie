"use client";
import React from "react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";

function Payment() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("data :>> ", data);
  };

  return (
    <div className="min-h-screen">
      <nav className="text-center h-[72px] pt-[22px] border-b-2 border-[#E9EBED]">CineMax</nav>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row justify-evenly px-20">
          <div className="w-8/12 flex flex-col py-20">
            <h2>Payment Method</h2>{" "}
            <input
              className="bg-[#F9F9F9] h-14 border-1 rounded-3xl max-w-[625px] mt-1 py-2 pl-4 focus-visible:outline-none "
              type="text"
            />
            <p className="text-lightGrayTextColor mt-6">Or checkout using a credit card</p>
            <div className="flex flex-col mt-6">
              <label className="text-grayTextColor">Cardholder Name</label>
              <input
                className={`bg-[#F9F9F9] h-14 rounded-3xl max-w-[625px] mt-1 py-2 pl-4 focus-visible:outline-none ${
                  errors.cardholdername ? "border-red-500" : ""
                }`}
                type="text"
                {...register("cardholdername", {
                  required: "Cardholder name is required",
                  pattern: {
                    value: /^[a-zA-ZıİğĞüÜşŞöÖçÇ\s]{1,32}$/,
                    message: "Cardholder name must be a minimum of 1 character and a maximum of 32 characters.",
                  },
                })}
              />
              {errors.cardholdername ? (
                <p className="text-rose-600 text-sm mt-1">{errors.cardholdername.message}</p>
              ) : null}
            </div>
            <div className="flex flex-row mt-6 gap-x-4 max-w-[625px]">
              <div className="flex flex-col">
                <label className="text-grayTextColor">Card Number</label>
                <InputMask
                  mask="9999 9999 9999 9999"
                  maskChar=" "
                  className="bg-[#F9F9F9] h-14 border-1 rounded-3xl mt-1 py-2 pl-4 focus-visible:outline-none"
                  type="text"
                  placeholder="Ex:  31111 1111 1111 1111"
                  {...register("cardnumber", {
                    required: "Card number is required",
                    pattern: {
                      value: /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/,
                      message: "The string must consist of 16 numeric digits",
                    },
                  })}
                />
                {errors.cardnumber ? <p className="text-rose-600 text-sm mt-1">{errors.cardnumber.message}</p> : null}
              </div>

              <div className="flex flex-col">
                <label className="text-grayTextColor">Expiration</label>
                <InputMask
                  mask="99/99"
                  maskChar=""
                  className="bg-[#F9F9F9] h-14 border-1 rounded-3xl mt-1 py-2 pl-4 focus-visible:outline-none"
                  type="text"
                  placeholder="MM/YY"
                  {...register("expiration", {
                    required: "Expiration is required",
                    pattern: {
                      value: /^(0[1-9]|1[0-1])\/(2[4-9]|1[3-9]\d|\d{3,})$/,
                      message: "Please enter a date after 11/23",
                    },
                  })}
                />
                {errors.expiration ? (
                  <p className="max-w-[400px] text-rose-600 text-sm mt-1">{errors.expiration.message}</p>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label className="text-grayTextColor">CVV</label>
                <input
                  className="bg-[#F9F9F9] h-14 border-1 rounded-3xl mt-1 py-2 pl-4 focus-visible:outline-none"
                  type="number"
                  {...register("cvv", {
                    required: "CVV is required",
                    pattern: {
                      value: /^\d{3}$/,
                      message: "The string must consist of 3 numeric digits",
                    },
                  })}
                />
                {errors.cvv ? <p className="max-w-[400px] text-rose-600 text-sm mt-1">{errors.cvv.message}</p> : null}
              </div>
            </div>
            <div className="flex flex-col mt-6">
              <label className="text-grayTextColor">Postal Code</label>
              <input
                className="bg-[#F9F9F9] h-14 border-1 rounded-3xl max-w-[625px] mt-1 py-2 pl-4 focus-visible:outline-none"
                type="text"
                placeholder="Postal or ZIP code"
                {...register("postalcode", {
                  required: "Postal code is required",
                  pattern: {
                    value: /^[a-zA-Z0-9]{3,12}$/,
                    message: "Postal code must be a minimum of 3 character and a maximum of 12 characters",
                  },
                })}
              />
              {errors.postalcode ? (
                <p className="text-rose-600 text-sm mt-1">{errors.postalcode.message}</p>
              ) : null}
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
            <button className="bg-[#B43FEB] py-4 px-10  rounded-3xl text-white" type="submit">
              Pay
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Payment;
