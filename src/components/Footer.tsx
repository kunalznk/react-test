import { Navbar, Typography } from "@material-tailwind/react";
 
const LINKS = [
  {
    title: "Product",
    items: ["Overview", "Features", "Solutions", "Tutorials"],
  },
  {
    title: "Company",
    items: ["About us", "Careers", "Press", "News"],
  },
  {
    title: "Resource",
    items: ["Blog", "Newsletter", "Events", "Help center"],
  },
];
 
const currentYear = new Date().getFullYear();
 
const Footer = () => {
  return (
    <Navbar
        variant="filled"
        color="blue-gray"
        className="mx-auto max-w-screen-3xl from-blue-gray-900 to-blue-gray-800 px-4 py-7 rounded-none  h-[6vh]"
        placeholder=""
      >
        <></>
      </Navbar>
  );
}

export default Footer;