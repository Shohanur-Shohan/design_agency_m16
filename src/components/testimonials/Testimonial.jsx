import { TestimonialApiCall } from "@/utility/testimonialApiCall";
const Testimonial = async () => {
  const testimonialData = await TestimonialApiCall();
    return (
    <section className="pt-[30px] max-w-[1200px] mx-auto pb-10 lg:pt-[100px] lg:pb-[30px]">

      <div className="px-4 mb-[40px]">
        <h1 className="text-[#20B15A] text-lg md:text-xl text-center  lg:text-left">All Projects</h1>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-800 dark:text-white md:text-4xl lg:text-left">Better Agency/SEO Solution At  <br className="sm:block" />Your Fingertips</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 px-2 md:grid-cols-2 lg:grid-cols-3">

          {/* <!-- Card --> */}   
          {
            testimonialData.map((item, id)=>{
              return(
                <div key={id} className="w-full px-5 py-8 bg-white border border-gray-200 rounded-lg shadow-lg h-fit dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex flex-col items-center">
                      <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={item.image} alt="profile"/>

                      <div className="text-center">
                        <h1 className="mt-2 text-2xl font-semibold">{item.name}</h1>
                        <span className="mb-3 text-sm font-semibold">{item.designation}</span>
                        <p className="text-gray-500 dark:text-gray-400">{item.msg}</p>
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

export default Testimonial;