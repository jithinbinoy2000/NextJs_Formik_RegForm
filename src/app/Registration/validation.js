import * as Yup from "yup";

// Register
export const RegisterFormSchema = Yup.object().shape({
  fullname: Yup.string()
    .required("Required")
    .max(25, "Max 25 characters")
    .min(2, "Minimum 2 characters")
    .matches(/^[a-zA-Z ]*$/, "Name should contain only letters."),
  email: Yup.string()
    .required("Required")
    .email("Invalid email format"),
  phone: Yup.string()
    .required("Required")
    .matches(/^\d{10}$/, "Phone number must be 10 digits"),
  dob: Yup.date()
    .required("Required")
    .max(new Date(), "Date of birth cannot be in the future"),
  gender: Yup.string()
    .required("Required"),
  nationality: Yup.string()
    .required("Required"),
  contact_method: Yup.string()
    .required("Required"),
  marital_status: Yup.string()
    .required("Required"),
});

// Address
export const addressSchema = Yup.object().shape({
  streetaddress: Yup.string()
    .required("Required")
    .min(2, "Enter full Address"),
  city: Yup.string()
    .required("Required")
    .min(2, "Fill the Field Completely"),
  state: Yup.string()
    .required("Required")
    .min(2, "Fill the Field Completely"),
  pincode: Yup.string()
    .required("Required")
    .matches(/^[0-9]{6}$/, "Invalid Pincode"),
  country: Yup.string()
    .required("Required")
    .min(2, "Fill the Field Completely"),
  residencetype: Yup.string()
    .required("Fill the Field Completely"),
});

// Card Payment 
export const cardSchema = Yup.object().shape({
  cardholderName: Yup.string()
    .required("Cardholder Name is required").max(20,"max 20 characters"),
  cardNumber: Yup.string()
    .matches(/^[0-9]{16}$/, "Card Number must be 16 digits")
    .required("Card Number is required"),
  expiryDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid Expiration Date")
    .required("Expiration Date is required"),
  cvv: Yup.string()
    .matches(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits")
    .required("CVV is required"),
  billingAddress: Yup.boolean(),
  paymentMethod: Yup.string()
    .required("Payment Method is required"),
  amount: Yup.number()
    .min(1, "Amount must be greater than zero")
    .required("Amount is required"),
});
