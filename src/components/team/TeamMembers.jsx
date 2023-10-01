import { TeamApiCall } from "@/utility/teamApiCall";
import Link from "next/link";
const TeamMembers = async () => {
    const teamMembers = await TeamApiCall();
    return (
       
        <section className="pt-[30px] max-w-[1200px] mx-auto pb-10 lg:pt-[100px] lg:pb-[30px]">

          <div className="px-4 mb-[40px]">
            <h1 className="text-[#20B15A] text-lg md:text-xl text-center  lg:text-left">Our Team Members</h1>
            <h2 className="mt-4 text-2xl font-bold text-center text-gray-800 dark:text-white md:text-4xl lg:text-left">Check our awesome team <br className="sm:block" />members</h2>
          </div>
          <div className="flex flex-wrap justify-center">
                {/* teamCard start*/}
                {
                    teamMembers.map((item, id)=>{
                        return(
                            <div key={id} className="w-full px-4 md:w-1/2 xl:w-1/3 mt-[30px] lg:mt-0">
                                <div className="w-full mx-auto">
                                    <div className="relative mx-auto overflow-hidden rounded-lg shadow-lg w-fit">
                                        <img src={item.image} alt="img" className="w-full" />
                                        <h1 className="text-center my-[25px] font-semibold text-2xl">{item.name}</h1>
                                        <div className="absolute left-0 w-full text-center bottom-[6rem]">
                                            <div className="relative flex items-center justify-between col-span-3 px-4 py-3 overflow-hidden bg-white rounded-full w-[40%] mx-auto">
                                                <Link href={item.facebook}><img src="/images/team/facebook.svg" alt="facebook" /></Link>
                                                <Link href={item.twitter}><img src="/images/team/twitter.svg" alt="twitter" /></Link>
                                                <Link href={item.instagram}><img src="/images/team/instragram.svg" alt="instragram" /></Link>
                                            </div>
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
  


export default TeamMembers;