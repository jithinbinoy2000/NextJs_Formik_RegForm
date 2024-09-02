"use client"
// /app/registration/Address.js

import { useFormik} from "formik";
import { RegisterFormSchema } from "./validation";

const initia = {
streetaddress:'',
  city:'',
  state:'',
  pincode:'',
  country:'',
  residencetype:''
}
const Address = ({ onNext,onPrev }) => {
 const formik = useFormik({
  initialValues:initia,
  validationSchema:RegisterFormSchema,
  onSubmit:(values)=>{
    console.log(values);
  }
})
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Address Information</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-2">
      {/* Street Address */}
      <div className="relative">
      <label htmlFor='streetaddress' className="block text-sm font-medium mb-1">Street Address</label>
      <input type='text' name='streetaddress' id='streetaddress' 
      className='w-full p-2 border border-grey-300 rounded' placeholder='Street Address'
      {...formik.getFieldProps('streetaddress')}/>
      <span className="text-red-500 text-xs">{formik.touched.streetaddress && formik.errors.streetaddress}</span>

      </div>
      
      {/* City */}
      <div className="relative">
      <label htmlFor='city' className="block text-sm font-medium mb-1">City</label>
      <input type='text' name='city' id='city' className='border border-grey-300 w-full p-2 rounded' placeholder='City'
      {...formik.getFieldProps("city")}/>
      <span className="text-red-500 text-xs">{formik.touched.city && formik.errors.city}</span>
      </div>
      

      {/* State */}
      <div className="relative">
      <label htmlFor='state' className="text-sm block font-medium mb-1">State</label>
      <input type='text' name='state' id='state' className='border boreder-grey-400 rounded w-full p-2' placeholder='State'
      {...formik.getFieldProps("state")}/>
        <span className="text-red-500 text-xs">{formik.touched.state && formik.errors.state}</span>
      </div>
      <div className="">
      
      <div className="relative">
        {/* Pincode */}
      <label htmlFor='pincode' className="text-sm font-medium mb-1 block">Pincode</label>
      <input type='text' name='pincode' id='pincode' className='border border-grey-300 rounded w-full p-2' placeholder='Pincode'
      {...formik.getFieldProps("pincode")}/>
      <span className="text-red-500 text-xs">{formik.touched.pincode && formik.errors.pincode}</span>
      </div>
      

      {/* Country */}
      <div>
      <label htmlFor='country' className="text-sm font-medium mb-1 block">Country</label>
      <input type='text' name='country' id='country' className='border border-grey-300 rounded w-full p-2' placeholder='Country'
      {...formik.getFieldProps("country")}
      />
      <span className="text-red-500 text-xs">{formik.touched.country && formik.errors.country}</span>
      </div>
     
      </div>
     
      {/* Type of Residence */}
      <div className="relative">
      <label htmlFor='residencetype' className="text-sm font-medium block mb-1">Type of Residence</label>
      <select name='residencetype' id='residencetype' className='border border-grey-300 rounded w-full p-2'
      {...formik.getFieldProps('reresidencetype')}>
        <option value='own'>Own</option>
        <option value='rent'>Rent</option>
        <option value='shared'>Shared</option>
        <option value='other'>Other</option>
      </select>
      <span className="text-red-500 font-xs">{formik.touched.residencetype && formik.errors.residencetype}</span>
      </div>
      <button onClick={onPrev} className='border rounded-md p-1 bg-black text-white'>Back</button>
      <button onClick={onNext} disabled={Object.keys(formik.errors).length>0} className='border rounded-md p-1 bg-black text-white mt-4'>
        Next
      </button>
      </form>
    </div>
  );
};

export default Address;
