
import Image from "next/image";
import Link from "next/link";


const NavBar = () => {
  return (
    <div className="w-full mb-[-100px] h-[100px] bg-transparent flex items-center">
      <div className="max-w-[1200px] px-2 mx-auto navbar">
        <div className="navbar-start">
          
          <Image width={150} height={150} src="/images/logo.svg" alt="logo"/>

        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="flex gap-5 px-1">
            <li  className="font-medium text-[16px] border-transparent hover:border-green-500 border-b-2"><Link  href={'/'}>Home</Link></li>
            <li  className="font-medium text-[16px] border-transparent hover:border-green-500 border-b-2"><Link href={'/team'}>Team</Link></li>
            <li  className="font-medium text-[16px] border-transparent hover:border-green-500 border-b-2"><Link href={'/services'}>Services</Link></li>
            <li  className="font-medium text-[16px] border-transparent hover:border-green-500 border-b-2"><Link href={'/projects'}>Projects</Link></li>
            <li  className="font-medium text-[16px] border-transparent hover:border-green-500 border-b-2"><Link href={'/testimonials'}>Testimonials</Link></li>           
          </ul>
        </div>
        <div className="navbar-end">
        <Link href={'/login'} className="hidden mr-3 px-8 py-2 lg:flex border-2 bg-transparent border-green-600 hover:bg-[#20B15A] hover:text-white rounded-lg font-medium">Login</Link>
        <Link href={'/register'} className="px-8 py-2 border-2 border-transparent hidden bg-[#20B15A] rounded-lg hover:bg-transparent hover:text-black hover:border-green-600  font-medium lg:flex text-white">Register</Link>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="dropdown-content mt-2 z-[1] gap-2 py-4 px-4 shadow bg-base-100 rounded-md w-52 ml-[-170px]">
              <li  className="font-medium text-[16px] mb-2  border-transparent hover:border-green-500 border-b-2"><Link href={'/'} >Home</Link></li>
              <li  className="font-medium text-[16px] mb-2  border-transparent hover:border-green-500 border-b-2"><Link href={'/team'}>Team</Link></li>
              <li  className="font-medium text-[16px] mb-2  border-transparent hover:border-green-500 border-b-2"><Link href={'/services'}>Services</Link></li>
              <li  className="font-medium text-[16px] mb-2  border-transparent hover:border-green-500 border-b-2"><Link href={'/projects'}>Projects</Link></li>
              <li  className="font-medium text-[16px] mb-2  border-transparent hover:border-green-500 border-b-2"><Link href={'/testimonials'}>Testimonials</Link></li> 
              <Link href={'/login'} className="lg:hidden px-8 py-2 mb-2 text-center justify-center flex border-2 bg-transparent border-green-600 font-medium hover:bg-[#20B15A] hover:text-white rounded-lg">Login</Link>
              <Link href={'/register'} className="px-8 py-2 border-2 mb-2 text-center justify-center border-transparent lg:hidden bg-[#20B15A] rounded-lg font-medium hover:bg-white hover:text-black hover:border-green-600 flex text-white">Register</Link>
            </ul>           
          </div>
        </div>
    </div>
  </div>
  );
};

export default NavBar;
