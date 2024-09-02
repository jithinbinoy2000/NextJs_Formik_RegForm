"use client"
// /app/registration/page.js

import React, { useState } from 'react';
import Personal from './Personal';
import Address from './Address';
import Payment from './Payment';

const RegistrationPage = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  return (
    <div>
      {step === 1 && <Personal onNext={handleNext} />}
      {step === 2 && <Address onNext={handleNext} onPrev={handlePrev} />}
      {step === 3 && <Payment onPrev={handlePrev} />}
    </div>
  );
};

export default RegistrationPage;
