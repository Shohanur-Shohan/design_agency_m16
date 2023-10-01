import { WorkListApiCall } from "@/utility/workListApiCall";
const WorkLists = async () => {
    const workListsData = await WorkListApiCall();
    // console.log(workListsData);
    return (
       
    <div className="py-[100px] max-w-[1200px] mx-auto">
        <div className="px-6 m-auto text-gray-500 md:px-2">
        <div>
            <h1 className="text-[#20B15A] text-lg md:text-xl text-center md:text-left">Work List</h1>
            <h2 className="mt-4 text-2xl font-bold text-center text-gray-800 dark:text-white md:text-4xl md:text-left">
            We provide the Perfect Solution <br className="sm:block" hidden />
            to your business growth
            </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-16 lg:gap-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {
                workListsData.map((item, id)=>{
                    return(
                        <div key={id} className="p-8 transition duration-300 bg-white border border-gray-100 shadow-2xl group rounded-3xl dark:border-gray-700 dark:bg-gray-800 dark:lg:bg-transparent lg:border-transparent hover:border-gray-100 dark:shadow-none dark:hover:border-gray-700 dark:hover:bg-gray-800 shadow-gray-600/10 lg:shadow-transparent lg:hover:shadow-gray-600/10 sm:gap-8">
                            <div className="">
                                <img src="/images/workLists/Activity.svg" className="p-4 bg-green-200 rounded-lg  w-[70px]" width="512" height="512" alt="package-delivery illustration" />
                                <h3 className="mt-8 mb-4 text-2xl font-semibold text-gray-800 transition dark:text-white">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{item.des}</p>
                                <button type="button" className="inline-flex items-center pt-5 text-sm font-medium text-center text-black hover:text-green-600">
                                    Choose plan
                                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    </div>
                                          
    );
};

export default WorkLists;