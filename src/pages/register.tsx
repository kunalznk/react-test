import { Button, Typography } from "@material-tailwind/react";
import CustomInput from '../components/CustomInput';

const Register = () => {
    return <div className="h-full w-full flex justify-center gap-12">
    <div className="h-full w-full hidden md:flex">
    <img
      className="h-full w-full object-cover object-center"
      src="/public/assets/images/login.svg"
      alt="nature image"
    />
    </div>
    <div className="w-full flex items-center sm:justify-center">
    {/* <form> */}
    <div className="w-full max-w-md flex flex-col gap-3 p-6 shadow-md rounded-lg">
    <Typography variant="h2" placeholder="">Create an account</Typography>
    <Typography variant="paragraph" placeholder="">Enter your details below </Typography>
    <CustomInput />
    <CustomInput />
    <CustomInput />
    <div className="flex flex-col  gap-3">
        <Button placeholder="">Create Account</Button>
        <Button placeholder="" variant="outlined">
        <Typography variant="paragraph" placeholder="" color="red" className="text-xs" >Login With Google </Typography>
        </Button>
    </div>
    <Button placeholder="" variant="text" className="flex gap-1 justify-center">
        <Typography variant="paragraph" placeholder="" className="text-xs" >Already have account?</Typography>
        <Typography variant="paragraph" placeholder="" color="red" className="text-xs underline" >Log in</Typography>

        </Button>
    </div>
    {/* </form>      */}
    </div>
    </div>
}

export default Register;