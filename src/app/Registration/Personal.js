"use client";
import { useFormik } from "formik";
import { RegisterFormSchema } from "./validation"; // Ensure this path is correct
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../lib/userDataSlice";
import './style.css'

const Personal = ({ onNext }) => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user.data.personal || {})
 

  const formik = useFormik({
     initialValues : {
      fullname: userData.fullname || "",
      email: userData.email || "",
      phone: userData.phone || "",
      dob: userData.dob || "",
      gender: userData.gender || "",
      nationality: userData.nationality || "",
      contact_method: userData.contact_method || "",
      marital_status: userData.marital_status || "",
    },
    validationSchema: RegisterFormSchema,
    validateOnChange: false,
    validateOnBlur: true,
    onSubmit: (values) => {
      console.log("submitting");
      console.log("Form submitted with values:", values);
      dispatch(addData({key:"personal",value:values}));
      onNext();
    },
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
      
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div className="relative">
          <label htmlFor="fullname" className="block text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Name"
            {...formik.getFieldProps("fullname")}
          />
          {formik.touched.fullname && formik.errors.fullname ? (
            <span className="text-red-500 text-xs">
              {formik.errors.fullname}
            </span>
          ) : null}
        </div>

        {/* Email */}
        <div className="relative">
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <span className="text-red-500 text-xs">{formik.errors.email}</span>
          ) : null}
        </div>

        {/* Phone Number */}
        <div className="relative">
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Phone Number"
            {...formik.getFieldProps("phone")}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <span className="text-red-500 text-xs">{formik.errors.phone}</span>
          ) : null}
        </div>

        {/* Date of Birth */}
        <div className="relative">
          <label htmlFor="dob" className="block text-sm font-medium mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            id="dob"
            className="w-full p-2 border border-gray-300 rounded"
            {...formik.getFieldProps("dob")}
          />
          {formik.touched.dob && formik.errors.dob ? (
            <span className="text-red-500 text-xs">{formik.errors.dob}</span>
          ) : null}
        </div>

        {/* Gender */}
        <div className="relative">
          <label htmlFor="gender" className="block text-sm font-medium mb-1">
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            className="w-full p-2 border border-gray-300 rounded"
            {...formik.getFieldProps("gender")}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
          {formik.touched.gender && formik.errors.gender ? (
            <span className="text-red-500 text-xs">{formik.errors.gender}</span>
          ) : null}
        </div>

        {/* Nationality */}
        <div className="relative">
          <label
            htmlFor="nationality"
            className="block text-sm font-medium mb-1"
          >
            Nationality
          </label>
          <input
            type="text"
            name="nationality"
            id="nationality"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Nationality"
            {...formik.getFieldProps("nationality")}
          />
          {formik.touched.nationality && formik.errors.nationality ? (
            <span className="text-red-500 text-xs">
              {formik.errors.nationality}
            </span>
          ) : null}
        </div>

        {/* Preferred Contact Method */}
        <div className="relative">
          <label
            htmlFor="contact_method"
            className="block text-sm font-medium mb-1"
          >
            Preferred Contact Method
          </label>
          <select
            name="contact_method"
            id="contact_method"
            className="w-full p-2 border border-gray-300 rounded"
            {...formik.getFieldProps("contact_method")}
          >
            <option value="">Select Contact Method</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
          {formik.touched.contact_method && formik.errors.contact_method ? (
            <span className="text-red-500 text-xs">
              {formik.errors.contact_method}
            </span>
          ) : null}
        </div>

        {/* Marital Status */}
        <div className="relative">
          <label
            htmlFor="marital_status"
            className="block text-sm font-medium mb-1"
          >
            Marital Status
          </label>
          <select
            name="marital_status"
            id="marital_status"
            className="w-full p-2 border border-gray-300 rounded"
            {...formik.getFieldProps("marital_status")}
          >
            <option value="">Select Marital Status</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
          {formik.touched.marital_status && formik.errors.marital_status ? (
            <span className="text-red-500 text-xs">
              {formik.errors.marital_status}
            </span>
          ) : null}
        </div>
          <div className="w-full flex justify-end">
          
          <button
          type="submit" 
          disabled={!formik.isValid || formik.isSubmitting}
          className=" p-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Next
        </button>
          </div>
         
      </form>
      <div className="w-full flex justify-center " style={{position:'relative', top:'-2rem'}}><progress value={1/3}  className="progress"></progress></div>
      
    </div>
  );
};

export default Personal;
