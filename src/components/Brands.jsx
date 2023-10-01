import { BrandApiCall } from "@/utility/brandApiCall";
const Brands = async () => {

    const brandData =  await BrandApiCall();
    // console.log(brandData);
    return (
    <section className="w-full bg-[#D7F5DC] pb-8">
        <div className="flex flex-wrap items-center justify-center w-full bg-white" >
          <div className="w-[1200px] mx-auto px-4">
            <div className="flex flex-wrap items-center justify-between">

                {
                brandData.map((item, id) => {
                    return (
                        <div key={id} className="mx-4 flex lg:w-[150px] w-[100px] items-center justify-center py-5 2xl:w-[180px]">
                        <img src={item.image} alt={item.name} className="w-full h-10" />
                        </div>
                    )
                    }
                    
                )};

            </div>
          </div>
        </div>

    </section>
)};
    
export default Brands;