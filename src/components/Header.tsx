import {
    Navbar,
    Typography,
    IconButton,
    Button,
    Input,
  } from "@material-tailwind/react";
  import { BellIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";
   
  const Header = () => {
    return (
      <Navbar
        variant="filled"
        color="blue-gray"
        className="mx-auto max-w-screen-3xl from-blue-gray-900 to-blue-gray-800 px-4 py-3 rounded-none h-[6vh]"
        placeholder=""
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
          <Typography
          placeholder=""
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            Exclusive
          </Typography>
          <div className="ml-auto flex gap-1 md:mr-4">
            <IconButton placeholder="" variant="text" color="white">
              <Cog6ToothIcon className="h-4 w-4" />
            </IconButton>
            <IconButton placeholder="" variant="text" color="white">
              <BellIcon className="h-4 w-4" />
            </IconButton>
          </div>
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
            crossOrigin=""
            placeholder=""
              type="search"
              color="white"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
            placeholder={""}
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
        </div>
      </Navbar>
    );
  }

  export default Header;