
const Button = (props) => {

    const { children , ...restProps } = props

    return  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" {...restProps}>
        {children}
    </button>

}

export default Button;