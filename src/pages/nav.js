import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = (props) => {

    const [navBar, setNavbar] = useState(false);

    return (
        <>
            <nav className="flex justify-between items-center p-3 bg-darkEletricBlue text-white font-alkalami px-2 sm:px-4 w-full z-20 top-0 left-0 ">
                <div className="flex items-center cursor-pointer">
                    {/* Logo */}
                    <div>
                        <FontAwesomeIcon className="text-almond text-xl" icon={faTruck} />
                    </div>

                    <div >
                        <h1 className="text-almond text-2xl">TMS</h1>
                    </div>
                </div>

                <ul className="hidden md:block md:flex md:flex-row md:justify-between">
                    <li className="">Home</li>
                    <li className="ml-4">Services</li>
                    <li className="ml-4">About</li>
                </ul>

                <div>
                    <button className="hidden rounded p-2 md:block bg-cafe">Get a Quote Now!</button>
                </div>

                {/* Mobile Icon */}
                <div
                    className="flex cursor-pointer md:hidden"
                    onClick={() => setNavbar(!navBar)}
                >
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg> */}
                    <div>
                        <FontAwesomeIcon className="text-xl" icon={faBars} />
                    </div>
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
                    <button className="rounded p-2 text-lg bg-cafe">Get a Quote Now!</button>
                </div>
            </div>
        </>
    );
}

export default Nav