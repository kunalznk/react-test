// App.js
import React, { useState } from 'react';
import AddressForm from './AddressForm';
import { frValidationSchema, gbValidationSchema } from './Schema';

const FormExample = () => {
  const [gb, setGb] = useState(null);
  const [fr, setFr] = useState(null);

  const handleGbSubmit = (data) => {
    console.log('GB Address:', data);
    setGb(data);
  };

  const handleFrSubmit = (data) => {
    console.log('FR Address:', data);
    setFr(data);
  };

  return (
    <div className="flex justify-around items-center h-screen">
      <div className="bg-white rounded-lg shadow-md p-8 w-1/4">
        <h1 className="text-2xl font-bold mb-4">GB Address</h1>
        {gb && <pre>{JSON.stringify(gb, null, 2)}</pre>}
        <AddressForm validationSchema={gbValidationSchema} onSubmit={handleGbSubmit} />
        </div>
        <div className="bg-white rounded-lg shadow-md p-8 w-1/4">
        <h1 className="text-2xl font-bold mt-8 mb-4">FR Address</h1>
        {fr && <pre>{JSON.stringify(fr, null, 2)}</pre>}
        <AddressForm validationSchema={frValidationSchema} onSubmit={handleFrSubmit} type='FR'/>
        </div>
    </div>
  );
};

export default FormExample;
