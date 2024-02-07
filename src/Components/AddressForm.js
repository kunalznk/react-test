// AddressForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from './Button';
import InputLabel from './InputLabel';
import Input from './Input';
import HelperText from './HelperText';

const AddressForm = ({ validationSchema, onSubmit, type="GB" }) => {
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 bg-gray-100 rounded shadow-lg">
            <div className="mb-4">
                <InputLabel htmlFor="line1" label={"Line 1"} className="block mb-1" />
                <Input className="w-full px-3 py-2 border rounded" name="line1" register={register} />
                {errors.line1?.message && <HelperText message={errors.line1?.message} />}
            </div>
            {type === "GB" &&<div className="mb-4">
                <InputLabel htmlFor="line2" label={"Line 2"} className="block mb-1" />
                <Input className="w-full px-3 py-2 border rounded" name="line2" register={register} />
                {errors.line2?.message && <HelperText message={errors.line2?.message} />}
            </div>}
            <div className="mb-4">
                <InputLabel htmlFor="country" label={"Country"} className="block mb-1" />
                <Input className="w-full px-3 py-2 border rounded" name="country" register={register} />
                {errors.country?.message && <HelperText message={errors.country?.message} />}
            </div>
            <div className="mb-4">
                <InputLabel htmlFor="postcode" label={"Postcode"} className="block mb-1" />
                <Input className="w-full px-3 py-2 border rounded" name="postcode" register={register} />
                {errors.postcode?.message && <HelperText message={errors.postcode?.message} />}
            </div>
            <Button type="submit">
                Submit
            </Button>
        </form>
    );
};

export default AddressForm;
