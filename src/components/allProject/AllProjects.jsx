import { AllProjectsApiCall } from "@/utility/allProjectsApiCall";
const AllProjects = async () => {
  const allProject = await AllProjectsApiCall();
    return (
    <section className="pt-[30px] max-w-[1200px] mx-auto pb-10 lg:pt-[100px] lg:pb-[30px]">

      <div className="px-4 mb-[40px]">
        <h1 className="text-[#20B15A] text-lg md:text-xl text-center  lg:text-left">All Projects</h1>
        <h2 className="mt-4 text-2xl font-bold text-center text-gray-800 dark:text-white md:text-4xl lg:text-left">Better Agency/SEO Solution At  <br className="sm:block" />Your Fingertips</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* <!-- Card --> */}
          {
            allProject.map((item,id)=>{
              return(
                 <div key={id} className="group items-center justify-center flex flex-col h-fit border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]">
                  <div className='mt-8 lg:mt-0'>
                    <div className='items-center justify-center mb-4 '>

                            <img className='object-cover w-full h-[auto] p-0 bg-center bg-cover rounded-md shadow-lg' src={item.image} alt='img'/>
                            <h2 className="items-center justify-center my-4 text-xl font-semibold text-center">{item.title}</h2>  
                      
                    </div>
                  </div>
                </div>
              )
            })
          }
         
          {/* <!-- End Card --> */}
      </div>
    </section>   

    );
};

export default AllProjects;