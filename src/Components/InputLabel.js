
const InputLabel = ( { label, htmlFor, ...restProps }) => {

    return   <label htmlFor={htmlFor} className="block mb-1" {...restProps}>{label}</label>

}

export default InputLabel;