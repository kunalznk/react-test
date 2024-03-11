import { Button, Card, Typography } from "@material-tailwind/react";
import CustomInput from '../components/CustomInput';

/*


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
    {/* <form> */}
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
    {/* </form>      */}
    </div>
    </div>
}

export default Login;