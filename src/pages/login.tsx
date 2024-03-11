import { Button, Card, Typography } from "@material-tailwind/react";
import CustomInput from '../components/CustomInput';

/*

Take User emailId and Password From Login 
on Click of Login Button Validate The User Input  Using Yup Validation Library
IF Validation Passed Call The API which is Given In The Postman 
 Show Success Message After The Login Button And Store Token Provided in The Response In Local Storage
 Else Show The Error Message

 Handle Validation Resp ANd Api Response Accordingly

 // Do not hard code any error message
from api and yup


Update The CustomInput Component as Such 
it will show the validation on error dynamically

*/

const Login = () => {
    return <div className="h-full w-full flex justify-center gap-12">
    <div className="h-full w-full ">
    <img
      className="h-full w-full object-cover object-center"
      src="/public/assets/images/login.svg"
      alt="nature image"
    />
    </div>
    <div className="w-full flex items-center  justify-center">
    <Card placeholder="" className="w-full max-w-md flex flex-col gap-3 p-6">
    <Typography variant="h2" placeholder="">Login</Typography>
    <Typography variant="paragraph" placeholder="">Enter your details below </Typography>
    <CustomInput />
    <CustomInput />
    <div className="flex justify-between items-center">
        <Button placeholder="">Login</Button>
        <Button placeholder="" variant="text">
        <Typography variant="paragraph" placeholder="" color="red" className="text-xs" >Forgot Password? </Typography>
        </Button>
    </div>
    </Card>
    </div>
    </div>
}

export default Login;