import { ServicesApiCall } from "@/utility/servicesApiCall";
const Services = async () => {

  const servicesData = await ServicesApiCall();
    return (
      <section className="pt-[30px] max-w-[1200px] mx-auto pb-10 lg:pt-[100px] lg:pb-[30px]">

      <div className="px-4 mb-[40px]">
        <h1 className="text-[#20B15A] text-lg md:text-xl text-center  lg:text-left">Our All Services</h1>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-800 dark:text-white md:text-4xl lg:text-left">We Provide BestWeb design  <br className="sm:block" />services</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">

          {
            servicesData.map((item, id)=>{
              return(
                  <div key={id} className="group items-center justify-center flex flex-col h-fit border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]">
                    <div className="my-6">
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">{item.title}</h3>
                      <p className="mt-5 text-gray-600 dark:text-gray-400">{item.des}</p>
                    </div>
                    <div className='mt-8 lg:mt-0'>
                      <div className='flex flex-wrap mb-4'>
                          <div className="flex gap-3">
                              <img className='object-cover w-full h-[auto] p-0 bg-center bg-cover rounded-md md:w-1/2 lg:w-2/3 shadow-lg' src={item.image1} alt='img'/>
                              <img className='object-cover w-full h-[auto] p-0 bg-center bg-cover rounded-md md:w-1/2 lg:w-1/3 shadow-lg' src={item.image2} alt='img'/>   
                          </div>                       
                      </div>
                      <div className='flex flex-wrap mb-4'>
                          <div className="flex gap-3">
                              <img className='object-cover w-full h-[auto] p-0 bg-center bg-cover rounded-md md:w-1/2 lg:w-1/2 shadow-lg' src={item.image3} alt='img'/>
                              <img className='object-cover w-full h-[auto] p-0 bg-center bg-cover rounded-md md:w-1/2 lg:w-1/2 shadow-lg' src={item.image4} alt='img'/>   
                          </div>                       
                      </div>
                    </div>
                </div>
              )
            })
          }

        </div>
      </section>   

    );
};

export default Services;