import { useState } from "react"

const Nav = (props) => {

    const [navBar, setNavbar] = useState(false);

    return (
        <>
            <nav className="flex justify-between items-center p-5 bg-darkEletricBlue text-white font-alkalami px-2 sm:px-4 w-full z-20 top-0 left-0 ">
                <div className="flex justify-between items-center cursor-pointer">
                    <div>
                        {/* Logo */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>

                    </div>
                    <div>
                        <h1>TMS</h1>
                    </div>
                </div>

                <ul className="hidden md:block md:flex md:flex-row md:justify-between">
                    <li className="">Home</li>
                    <li className="ml-4">Services</li>
                    <li className="ml-4">About</li>
                </ul>

                <div>
                    <button className="hidden rounded p-2 md:block">Get a Quote Now!</button>
                </div>
                
                {/* Mobile Icon */}
                <div 
                    className="flex cursor-pointer md:hidden"
                    onClick={() => setNavbar(!navBar)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`flex flex-col p-10 bg-darkEletricBlue text-white sm:w-full mx-auto text-center md:hidden ${navBar ? 'block' : 'hidden'} transition-transform duration-100 ease-in`}>
                <ul className="">
                    <li className="mb-2 cursor-pointer text-lg">Home</li>
                    <li className="mb-2 cursor-pointer text-lg">Services</li>
                    <li className="mb-3 cursor-pointer text-lg">About</li>
                </ul>
                <div>
                <button className="rounded p-2 text-lg">Get a Quote Now!</button>
                </div>     
            </div>
        </>
    );
}

export default Nav