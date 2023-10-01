
const NewsLetter = () => {
    return (

            <div className=" max-w-[1200px] mx-auto rounded-md bg-white py-[50px]  px-2">
                <div className="flex flex-col items-center">
                    <p className="text-md text-[#20B15A] uppercase">Subscribe</p>
                    <h3 className="max-w-2xl mt-2 text-2xl font-bold leading-tight text-center capitalize sm:text-3xl md:text-4xl md:leading-tight">Subscribe to get the latest</h3>
                    <h3 className="max-w-2xl mt-2 text-2xl font-bold leading-tight text-center capitalize sm:text-3xl md:text-4xl md:leading-tight">news about us</h3>
                    <p className="text-center text-sm text-[#8B8B8B] mb-3 capitalize">Please drop your email below to get daily update about what we do</p>
                    <form className="flex flex-col w-full max-w-lg gap-3 mx-auto mt-4 sm:flex-row sm:gap-0">
                        <input type="email" name="email" id="email" className="px-3 py-3 border-2 border-gray-300 rounded grow focus:border-emerald-500 focus:outline-none sm:rounded-l-md sm:rounded-r-none sm:border-r-0" placeholder="Email Address" />
                        <button type="submit" className="px-5 py-4 font-bold text-white rounded bg-emerald-500 sm:rounded-l-none sm:rounded-r-md">Subscribe</button>
                    </form>
                </div>
            </div>


    );
};

export default NewsLetter;