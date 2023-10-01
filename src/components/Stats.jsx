import { StatsApiCall } from "@/utility/statsApiCall";
const Stats = async () => {
  const statsData = await StatsApiCall();

    return (
        <div className="max-w-[1200px] px-4 py-[50px] sm:px-4 lg:px-2 mx-auto">
          {/* <!-- Grid --> */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {/* <!-- Card --> */}
            <div className="flex flex-col px-4 py-6 bg-white border shadow-lg gap-y-3 lg:gap-y-5 rounded-xl dark:bg-slate-900 dark:border-gray-800">
              <div className="inline-flex items-center justify-center">
                <img src="/images/stats/Group.svg" className="p-4 bg-green-200 rounded-lg w-[70px]" width="512" height="512" alt="package-delivery illustration"/>
              </div>
        
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-200">{statsData.followers}</h3>
                <h2 className="mt-2 font-semibold text-gray-800 text-md dark:text-gray-200">Followers</h2>
              </div>
            </div>
            {/* <!-- End Card --> */}

             {/* <!-- Card --> */}
            <div className="flex flex-col p-4 bg-white border shadow-lg gap-y-3 lg:gap-y-5 md:p-5 rounded-xl dark:bg-slate-900 dark:border-gray-800">
              <div className="inline-flex items-center justify-center">
                <img src="/images/stats/Like.svg" className="p-4 bg-green-200 rounded-lg w-[70px]" width="512" height="512" alt="package-delivery illustration"/>
              </div>
        
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-200">{statsData.solved}</h3>
                <h2 className="mt-2 font-semibold text-gray-800 text-md dark:text-gray-200">Solved Problems</h2>
              </div>
            </div>
            {/* <!-- End Card --> */}
        
            {/* <!-- Card --> */}
            <div className="flex flex-col p-4 bg-white border shadow-lg gap-y-3 lg:gap-y-5 md:p-5 rounded-xl dark:bg-slate-900 dark:border-gray-800">
              <div className="inline-flex items-center justify-center">
                <img src="/images/stats/Happy.svg" className="p-4 bg-green-200 rounded-lg w-[70px]" width="512" height="512" alt="package-delivery illustration"/>
              </div>
        
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-200">{statsData.customers}</h3>
                <h2 className="mt-2 font-semibold text-gray-800 text-md dark:text-gray-200">Happy Customers</h2>
              </div>
            </div>
            {/* <!-- End Card --> */}
        
            {/* <!-- Card --> */}
            <div className="flex flex-col p-4 bg-white border shadow-lg gap-y-3 lg:gap-y-5 md:p-5 rounded-xl dark:bg-slate-900 dark:border-gray-800">
              <div className="inline-flex items-center justify-center">
                <img src="/images/stats/Scan.svg" className="p-4 bg-green-200 rounded-lg w-[70px]" width="512" height="512" alt="package-delivery illustration"/>
              </div>
        
              <div className="text-center">
                <h3 className="text-4xl font-bold text-gray-800 dark:text-gray-200">{statsData.projects}</h3>
                <h2 className="mt-2 font-semibold text-gray-800 text-md dark:text-gray-200">Projects</h2>
              </div>
            </div>
            {/* <!-- End Card --> */}
          </div>
          {/* <!-- End Grid --> */}
        </div>
    );
};

export default Stats;