import { Button, Typography } from "@material-tailwind/react";
import FilterSideBar from "../components/FilterSideBar";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Pagination from "../components/Pagination";
import ProductList from "../components/List";


const Catalog = () => {
    return <div className="flex gap-3">
    <div className="hidden sm:block px-4 ring-1 ring-gray-300 rounded-lg w-4/12">
    <FilterSideBar />
    </div>
    <div className="flex flex-col gap-3">
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
        <Typography variant="h5"> Casual</Typography>
        <div className="flex gap-1 items-end">
        <p className="text-gray-600 text-sm">
           Showing 1-10 of 100 Products 
        </p>
        <p className="text-gray-600 text-sm">
           Sort By: 
        </p>
        <p className=" text-sm font-medium">
           Most Popular 
        </p>
        <Button variant="text" className="p-[2px] rounded-sm">
                <ChevronDownIcon className="size-4" />
            </Button>
        </div>
    </div>
    <ProductList />
    <Pagination />
    </div>
    </div>
}

export default Catalog;