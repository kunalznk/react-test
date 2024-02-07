
const HelperText = ( { message, ...restProp } ) => {
    return  <span className="text-red-500" {...restProp}>{message}</span>
}

export default HelperText;