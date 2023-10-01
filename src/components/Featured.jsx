import { FeaturedApiCall } from "@/utility/featuredApiCall";
const Featured = async () => {
    const featuredData = await FeaturedApiCall();
    // console.log(featuredData);
    return (
       
    <div className="py-[50px] md:py-[100px] bg-[#F0FDF4]">
        <div className="max-w-[1200px] mx-auto px-6 m-auto text-gray-500 md:px-2">
            <div className="">
                <h1 className="text-[#20B15A] text-lg md:text-xl text-center lg:text-left">Featured Projects</h1>
                <h2 className="mt-4 text-2xl font-bold text-center text-gray-800 dark:text-white md:text-4xl lg:text-left">
                We provide the Perfect Solution <br className="sm:block" hidden />
                to your business growth
                </h2>
            </div>
            {/* hero */}
            <div className="w-full mt-7">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:items-center ">
                    {
                        featuredData.map((item, id)=>{
                            return(
                               <div  key={id} className="w-full">
                                   <img className='object-cover w-full h-auto p-0 bg-center bg-cover rounded-md ' src={item.image} alt='img'/> 
                                   <h2 className="text-lg font-bold text-black">{item.title}</h2>
                                </div>   
                            )
                        })
                    }
                                                 
                    {/* <!-- End Col --> */}
                </div>
            </div>
            {/* hero */}
        </div>
    </div>
                                          
    );
};

export default Featured;