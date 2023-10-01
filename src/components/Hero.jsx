import { HeroApiCall } from "@/utility/heroApiCall";

const Hero = async () => {
    const heroData = await HeroApiCall();
    return (
    <div>
     <div className="w-full bg-[#D7F5DC] dark:bg-gray-900">
        <div className="max-w-[1200px] mx-auto sm:px-3 lg:px-2 pt-[150px] lg:pt-[200px] pb-[100px]">
        {/* <!-- Grid --> */}
            <div className="grid gap-2 lg:gap-4 md:grid-cols-2 md:items-center ">
                <div className='text-center md:text-left px-[10%] md:px-[5%] lg:px-0'>
                    <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">{heroData.title}</h1>
                    <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">{heroData.description}</p>

                    {/* <!-- Buttons --> */}
                    <div className="grid w-full gap-3 sm:justify-center mt-7 sm:inline-flex md:justify-start">
                        <a className="inline-flex items-center justify-center px-4 py-3 text-sm font-medium rounded-lg text-center text-white transition bg-[#20B15A] border border-transparent  gap-x-3 hover:bg-[#02724f] lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800" href="#">
                        Get started
                        <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        </a>
                    </div>
                {/* <!-- End Buttons --> */}
                </div>
                {/* <!-- End Col --> */}

                <div className='relative px-4 mt-8 lg:ml-4 lg:mt-0'>
                    <div className='flex flex-wrap mb-4'>
                        <div className="flex gap-3">
                            <img className='object-cover w-full h-[auto] p-0 bg-center bg-cover rounded-md md:w-1/2 lg:w-2/3' src={heroData.image2} alt='img'/>
                            <img className='object-cover w-full h-[auto] p-0 bg-center bg-cover rounded-md md:w-1/2 lg:w-1/3' src={heroData.image1} alt='img'/>   
                        </div>                       
                    </div>
                    <div className='flex flex-wrap mb-4 '>
                        <div className="flex gap-3">
                            <img className='object-cover w-full h-[auto] p-0 bg-center bg-cover rounded-md md:w-1/2 lg:w-1/3' src={heroData.image4} alt='img'/>
                            <img className='object-cover w-full h-[auto] p-0 bg-center bg-cover rounded-md md:w-1/2 lg:w-2/3' src={heroData.image3} alt='img'/>
                        </div>
                    </div>
                </div>
                {/* <!-- End Col --> */}
            </div>
        {/* <!-- End Grid --> */}
        </div>
     </div>
    </div>
    );
};

export default Hero;