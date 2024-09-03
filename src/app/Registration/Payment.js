"use client";
// /app/registration/Payment.js
import React, { useEffect } from "react";
import { useFormik } from "formik";
import { cardSchema } from "./validation"; // Ensure the path and schema name are correct
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../lib/userDataSlice";
import Link from "next/link";
import Image from "next/image";



const Payment = ({ onPrev }) => {
 
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data.payment || {});
  const finalData = useSelector((state) => state.user.data);
  
  const saveAllData = (data) => {
    localStorage.setItem("data", JSON.stringify(data));
    alert("Registration Completed");
    window.location.href='/'
  };
  const formik = useFormik({
    initialValues: {
      cardholderName: userData.cardholderName || "",
      cardNumber: userData.cardNumber || "",
      expiryDate: userData.expiryDate || "",
      cvv: userData.cvv || "",
      billingAddress: userData.billingAddress || "",
      paymentMethod: userData.paymentMethod || "",
      amount: userData.amount || "",
    },
   validationSchema: cardSchema,
    onSubmit: (values) => {
      dispatch(addData({ key: 'payment', value: values }));
      saveAllData(finalData)
    },
  });
  useEffect(()=>{
    console.log("hi");
    console.log(formik);
    
    
  })


  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Payment Information</h2>
      <div className="card_container  flex justify-center items-center">
        <div className="card">
          <div className="block p-2">
            <h2 className="text-xl font-bold text-white ">BankName</h2>
            <h4 className="text-sm font-bold text-white">Credit Card</h4>
          </div>
          <div className="flex w-full items-center justify-between px-5 font-bold">
            <Image src='/images/chip.png' width={40} height={100}/>
            <Image src='/images/contactless.png' width={20} height={50}/>
          </div>
          <div className="chrome-text  text-sm font-bold p-2">{...formik.values.cardNumber.slice(0,4)||"****"}&nbsp;{...formik.values.cardNumber.slice(4,8)||"****"}&nbsp; {...formik.values.cardNumber.slice(8,12)||"****"}&nbsp;{...formik.values.cardNumber.slice(12,16)||"****"}</div>
          <div className="flex w-full  items-center justify-between px-5 chrome-text">
            <div className="text-wrap max-[10px] h-auto relative:" >{...formik.values.cardholderName.toUpperCase().slice(0,20)|| "Name"}</div>
            <div>{...formik.values.expiryDate.split('/')[0] || "MM"}/{...formik.values.expiryDate.split('/')[1] || "YY"}</div>
          </div>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Cardholder Name */}
        <div className="relative">
          <label
            htmlFor="cardholderName"
            className="block text-sm font-medium mb-1"
          >
            Cardholder Name
          </label>
          <input
            type="text"
            name="cardholderName"
            id="cardholderName"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Cardholder Name"
            {...formik.getFieldProps("cardholderName")}
          />
          {formik.touched.cardholderName && formik.errors.cardholderName ? (
            <span className="text-red-500 text-xs">
              {formik.errors.cardholderName}
            </span>
          ) : null}
        </div>

        {/* Credit Card Number */}
        <div className="relative">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium mb-1"
          >
            Credit Card Number
          </label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Credit Card Number"
            {...formik.getFieldProps("cardNumber")}
          />
          {formik.touched.cardNumber && formik.errors.cardNumber ? (
            <span className="text-red-500 text-xs">
              {formik.errors.cardNumber}
            </span>
          ) : null}
        </div>

        {/* Expiration Date */}
        <div className="relative">
          <label
            htmlFor="expiryDate"
            className="block text-sm font-medium mb-1"
          >
            Expiration Date
          </label>
          <input
            type="text"
            name="expiryDate"
            id="expiryDate"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="MM/YY"
            {...formik.getFieldProps("expiryDate")}
          />
          {formik.touched.expiryDate && formik.errors.expiryDate ? (
            <span className="text-red-500 text-xs">
              {formik.errors.expiryDate}
            </span>
          ) : null}
        </div>

        {/* CVV */}
        <div className="relative">
          <label htmlFor="cvv" className="block text-sm font-medium mb-1">
            CVV
          </label>
          <input
            type="text"
            name="cvv"
            id="cvv"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="CVV"
            {...formik.getFieldProps("cvv")}
          />
          {formik.touched.cvv && formik.errors.cvv ? (
            <span className="text-red-500 text-xs">{formik.errors.cvv}</span>
          ) : null}
        </div>

        {/* Billing Address */}
        <div className="relative flex items-center">
          <input
            type="checkbox"
            name="billingAddress"
            id="billingAddress"
            className="mr-2"
            {...formik.getFieldProps("billingAddress")}
          />
          <label htmlFor="billingAddress" className="text-sm font-medium">
            Same as address
          </label>
          {formik.touched.billingAddress && formik.errors.billingAddress ? (
            <span className="text-red-500 text-xs ml-2">
              {formik.errors.billingAddress}
            </span>
          ) : null}
        </div>

        {/* Payment Method */}
        <div className="relative">
          <label
            htmlFor="paymentMethod"
            className="block text-sm font-medium mb-1"
          >
            Payment Method
          </label>
          <select
            name="paymentMethod"
            id="paymentMethod"
            className="w-full p-2 border border-gray-300 rounded"
            {...formik.getFieldProps("paymentMethod")}
          >
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          {formik.touched.paymentMethod && formik.errors.paymentMethod ? (
            <span className="text-red-500 text-xs">
              {formik.errors.paymentMethod}
            </span>
          ) : null}
        </div>

        {/* Amount */}
        <div className="relative">
          <label htmlFor="amount" className="block text-sm font-medium mb-1">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Amount"
            {...formik.getFieldProps("amount")}
          />
          {formik.touched.amount && formik.errors.amount ? (
            <span className="text-red-500 text-xs">{formik.errors.amount}</span>
          ) : null}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-4 flex justify-between">
          <button
            onClick={onPrev}
            className="border rounded-md p-2 bg-black text-white"
             type='submit'
          >
            Back
          </button>
          <button
            type="submit"
            disabled={Object.keys(formik.errors).length > 0}
            className="border rounded-md p-2 bg-black text-white"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="w-full flex justify-center " style={{position:'relative', top:'-1rem'}}><progress value={3/3}  className="progress"></progress></div>
    </div>
  );
};

export default Payment;
