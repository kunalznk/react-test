
const ProductList = () => {
    return <div className="w-full flex gap-6 flex-wrap">
        {new Array(9).fill(1).map(() => <div className="flex flex-col gap-2 p-4  w-80 max-w-80 shadow-md rounded-xl">
            <div className="w-full aspect-square bg-gray-300 rounded-xl animate-pulse" />
            
            <div className="w-12/12 h-6 bg-gray-300 rounded-md animate-pulse"/>
            <div className="w-11/12 h-4 bg-gray-300 rounded-md animate-pulse"/>
            <div className="w-10/12 h-5 bg-gray-300 rounded-md animate-pulse"/>


        </div>)}
    </div>
}

export default ProductList;