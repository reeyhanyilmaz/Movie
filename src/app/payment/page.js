"use client";
import React, { useState, useEffect } from "react";
import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useTheme } from "next-themes";
import ClipLoader from "react-spinners/ClipLoader";

function Payment() {
  const { theme, setTheme } = useTheme();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "all",
    reValidateMode: "onChange",
    defaultValues: {
      cardholdername: "",
      cardnumber: "",
      expiration: "",
      cvv: "",
      postalcode: "",
    },
  });

  const onSubmit = (data) => {
    console.log("data :>> ", data);
  };

  const handleExpirationValidation = (value) => {
    const today = new Date();
    const currentMonth = today.getMonth() + 1;
    const currentYear = Number(today.getFullYear().toString().slice(2));
    const monthAndYear = value.split("/");
    const month = Number(monthAndYear[0]);
    const year = Number(monthAndYear[1]);

    if (year < currentYear) {
      return "Enter a valid year";
    }

    if (year == currentYear && month < currentMonth) {
      return "Enter a valid month";
    }

    return true;
  };

  const submitButtonDisabled = () => {
    //inputlar bos mu kontrol ediliyor, bos ise button disabled
    const inputValues = getValues();
    const isAnyEmpty = Object.values(inputValues).some((item) => item.trim() === "");

    if (Object.keys(errors).length > 0) {
      return true;
    }

    if (isAnyEmpty) {
      return true;
    }

    return false;
  };

  //paypal or apple pay checked
  const [selectedOption, setSelectedOption] = useState("paypal");
  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  //theme check
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted === false) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <ClipLoader color="#B43FEB" loading={true} size={100} aria-label="Loading Spinner" data-testid="loader" />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <nav className="flex justify-center items-center h-[72px] border-b border-ligthModeBorderColor dark:bg-darkModaFirstColor dark:border-[#29282F]">
        <Image
          src={theme === "dark" ? "/dark_mode_CineMax.svg" : "/light_mode_CineMax.svg"}
          width={87}
          height={28}
          alt="cinemax_logo"
        />
      </nav>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-row justify-evenly dark:bg-darkModaFirstColor">
          <div className="w-8/12 flex flex-col py-16 px-20">
            <p className="text-2xl font-bold mb-6 dark:text-white">Payment Method</p>
            <div>
              <div
                className={`flex items-center gap-1 text-base font-bold italic bg-inputBackgroundColor h-14 border ${
                  selectedOption === "paypal" ? "border border-pinkColor" : "border-none"
                } rounded-3xl max-w-[625px] mt-1 mb-6 py-2 pl-4 dark:text-white dark:bg-darkModaSecondColor`}
              >
                <input
                  className="mr-4"
                  type="radio"
                  checked={selectedOption === "paypal"}
                  onChange={() => handleOptionChange("paypal")}
                />
                <Image className="mr-2" src="/payment/paypal.svg" width={17} height={20} alt="paypal" /> Paypal
              </div>
              <div
                className={`flex items-center bg-inputBackgroundColor h-14 rounded-3xl max-w-[625px] mt-1 py-2 pl-4 dark:bg-darkModaSecondColor ${
                  selectedOption === "applePay" ? "border border-pinkColor" : ""
                }`}
              >
                <input
                  className="mr-4"
                  type="radio"
                  checked={selectedOption === "applePay"}
                  onChange={() => handleOptionChange("applePay")}
                />
                <Image
                  src={theme === "dark" ? "/payment/dark_mode_apple_pay.svg" : "/payment/apple_pay.svg"}
                  width={45}
                  height={20}
                  alt="apple_logo"
                />
              </div>
            </div>
            <p className="text-lightGrayTextColor mt-6">Or checkout using a credit card</p>
            <div className="flex flex-col mt-6">
              <label className="text-grayTextColor">Cardholder Name</label>
              <input
                className={`bg-inputBackgroundColor h-14 rounded-3xl max-w-[625px] mt-1 py-2 pl-4 focus-visible:outline-none dark:bg-darkModaSecondColor dark:text-white ${
                  errors.cardholdername ? "border border-red-500" : ""
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
                  className={`bg-inputBackgroundColor h-14 rounded-3xl max-w-[625px] mt-1 py-2 pl-4 focus-visible:outline-none dark:bg-darkModaSecondColor dark:text-white ${
                    errors.cardnumber ? "border border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="Ex: 31111 1111 1111 1111"
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
                  className={`bg-inputBackgroundColor h-14 rounded-3xl max-w-[625px] mt-1 py-2 pl-4 focus-visible:outline-none dark:bg-darkModaSecondColor dark:text-white ${
                    errors.expiration ? "border border-red-500" : ""
                  }`}
                  type="text"
                  placeholder="MM/YY"
                  {...register("expiration", {
                    required: "Expiration is required",
                    validate: (value) => handleExpirationValidation(value),
                  })}
                />
                {errors.expiration ? (
                  <p className="max-w-[400px] text-rose-600 text-sm mt-1">{errors.expiration.message}</p>
                ) : null}
              </div>

              <div className="flex flex-col">
                <label className="text-grayTextColor">CVV</label>
                <input
                  className={`bg-inputBackgroundColor h-14 rounded-3xl max-w-[625px] mt-1 py-2 pl-4 focus-visible:outline-none dark:bg-darkModaSecondColor dark:text-white ${
                    errors.cvv ? "border border-red-500" : ""
                  }`}
                  maxLength="3"
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
                className={`bg-inputBackgroundColor h-14 rounded-3xl max-w-[625px] mt-1 py-2 pl-4 focus-visible:outline-none dark:bg-darkModaSecondColor dark:text-white ${
                  errors.postalcode ? "border border-red-500" : ""
                }`}
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
              {errors.postalcode ? <p className="text-rose-600 text-sm mt-1">{errors.postalcode.message}</p> : null}
            </div>
          </div>
          <div className="w-4/12 flex flex-col h-screen border-l border-ligthModeBorderColor bg-inputBackgroundColor pl-14 py-10 pr-20 dark:bg-darkModaSecondColor dark:border-[#29282F]">
            <div className="flex flex-row justify-between mb-6">
              <p className="text-lightGrayTextColor text-base">Subtotal</p>
              <p className="font-semibold dark:text-white">$4.99</p>
            </div>
            <div className="flex flex-row justify-between mb-6">
              <p className="text-lightGrayTextColor text-base">Plan Type</p>
              <p className="font-semibold dark:text-white">Monthly</p>
            </div>
            <div className="flex flex-row justify-between mb-6">
              <p className="text-lightGrayTextColor text-base">Monthly plan discount</p>
              <p className="font-semibold dark:text-white">-$5</p>
            </div>
            <div className="border border-ligthModeBorderColor my-7 dark:border-[#29282F]"></div>
            <div className="flex flex-row justify-between justify-between mb-7">
              <p className="text-lightGrayTextColor text-base">Billed Now</p>
              <p className="text-[#B43FEB] font-semibold">$35</p>
            </div>
            <p className="mb-16 text-grayTextColor">
              You will be charged $5 every yearly thereafter while the subscription is active. Cancel any time.
            </p>
            <button
              className="bg-[#B43FEB] py-4 px-10 rounded-3xl text-white disabled:bg-gray-400"
              type="submit"
              disabled={submitButtonDisabled()}
            >
              Pay
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Payment;
