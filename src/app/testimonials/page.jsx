import Footer from "@/components/Footer";
import NewsLetter from "@/components/NewsLetter";
import Testimonial from "@/components/testimonials/testimonial";


const page = () => {
    return (
        <div className="w-full" >
        <div className="sm:px-3 lg:px-2 pt-[150px] px-4 pb-[100px] bg-[#F8F9FC]">
            <div className="max-w-[1200px] mx-auto">
                <h1 className="mb-3 text-4xl font-semibold text-black">Testimonial List</h1>
                <div className="flex items-center">
                    <h3 className="text-[16px]">Home </h3>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                    </span>
                    <h3 className="text-[16px] text-[#20B15A]">Testimonial List </h3>
                </div>
                
            </div>     
        </div>
        <Testimonial/>
        <NewsLetter/>
        <Footer/>
    </div>
    );
};

export default page;