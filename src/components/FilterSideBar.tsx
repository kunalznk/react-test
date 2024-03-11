import { Accordion, AccordionHeader, Button, Typography, Progress, AccordionBody, Chip    } from "@material-tailwind/react";
import { AdjustmentsVerticalIcon, ChevronUpIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function FilterTitle ( { children } : { children : any } ) {
    return  <Typography placeholder="" variant="h6">
        {children}
    </Typography>
}


const FilterSideBar = () => {
    return <div className="w-full h-full flex flex-col gap-3 divide-y-[1px] divide-gray-300">
        <div className="flex justify-between items-center ">
            <FilterTitle>Filters</FilterTitle>
            <Button placeholder="" variant="text" className="p-[2px] rounded-sm">
                <AdjustmentsVerticalIcon className="size-4 text-gray-600" />
            </Button>
        </div>

        <div className="flex flex-col gap-3 py-2">
            {new Array(5).fill(1).map(() => <div className="flex items-center justify-between ">
                <Typography placeholder="" className="text-base font-light text-gray-600">T-Shirts</Typography>
                <Button placeholder="" variant="text" className="p-[2px] rounded-sm">
                <ChevronRightIcon className="size-3 text-gray-800" />
                </Button>
            </div>)}
        </div>

        <Accordion placeholder="" className="" open={true} icon={
            <Button placeholder="" variant="text" className="p-[2px] rounded-sm">
            <ChevronUpIcon className="size-4 text-gray-600" />
        </Button>
        }>
            <AccordionHeader placeholder="" className="border-0 p-0">
            <FilterTitle>Price</FilterTitle>
            </AccordionHeader>
            <AccordionBody className="p-0" >
            <Progress placeholder="" value={50} />
            </AccordionBody>
        </Accordion>

        <Accordion placeholder="" className="" open={true} icon={
           <Button placeholder="" variant="text" className="p-[2px] rounded-sm">
           <ChevronUpIcon className="size-4 text-gray-600" />
       </Button>
        }>
            <AccordionHeader placeholder="" className="border-0 p-0">
            <FilterTitle>Color</FilterTitle>
            </AccordionHeader>
            <AccordionBody className="p-0">
            <div className="w-full flex flex-wrap gap-2">
            {new Array(18).fill(1).map(() => <div className="bg-gray-600 size-6 rounded-full"/>)}
            </div>
            </AccordionBody>
        </Accordion>

        <Accordion placeholder="" className="" open={true} icon={
           <Button placeholder="" variant="text" className="p-[2px] rounded-sm">
           <ChevronUpIcon className="size-4 text-gray-600" />
       </Button>
        }>
            <AccordionHeader placeholder="" className="border-0 p-0">
            <FilterTitle>Sizes</FilterTitle>
            </AccordionHeader>
            <AccordionBody className="p-0">
            <div className="w-full flex flex-wrap gap-2">
            <Chip variant="filled" className="rounded-full px-2 py-1" 
            value={<p className="font-extralight">ghost</p>}
            />
            {new Array(18).fill(1).map(() =>   <Chip variant="ghost" className="rounded-full px-2 py-1 " 
            value={<p className="font-extralight text-gray-600">ghost</p>}
            />
            )}
            </div>
            </AccordionBody>
        </Accordion>

        <div className="flex justify-center items-center py-2">
        <Button placeholder="" size="sm">
            <FilterTitle>
            Apply Filters
            </FilterTitle>
        </Button>
        </div>

    </div>
}

export default FilterSideBar;