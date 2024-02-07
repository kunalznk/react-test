import * as yup from 'yup';

// Validation schema for GB addresses
const gbValidationSchema = yup.object().shape({
  line1: yup.string().optional(), // Optional house number
  line2: yup.string().optional(), // Line 2 can be blank
  country: yup.string().required('Country is required'),
  postcode: yup.string().matches(/^[A-Z]{1,2}[0-9][A-Z0-9]? [0-9][A-Z]{2}$/, 'Invalid postcode').required('Postcode is required'),
});

// Validation schema for FR addresses
const frValidationSchema = yup.object().shape({
  line1: yup.string().required('Line 1 is required').matches(/^[a-zA-Z0-9\s]+$/, 'Invalid characters'),
  country: yup.string().required('Country is required'),
  postcode: yup.string().matches(/^\d{5,7}$/, 'Invalid postcode').required('Postcode is required'),
});

export { gbValidationSchema, frValidationSchema };
