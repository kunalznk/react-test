import React from 'react';

const Input = ({ name, register,...rest }) => {
    return (
            <input className="w-full px-3 py-2 border rounded" {...register(name)} {...rest} />
    );
};

export default Input;
