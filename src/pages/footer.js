import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <>
            <footer className="grid grid-cols-1 justify-items-center mt-5 p-5 bg-darkEletricBlue lg:p-10 lg:grid-cols-4 lg:items-start">

                <div className="text-center w-9/12 lg:w-10/12 p-4">
                    <h2 className="font-alkalami text-2xl text-white">READY TO GET MOVING? GET YOUR FREE QOUTE</h2>
                    <button className="bg-almond p-2 rounded">FREE QUOTE</button>
                </div>

                <div className="mt-8 text-center w-9/12  p-4 lg:W-10/12 lg:mt-0">
                    <h3 className="font-alkalami text-2xl text-white">HAVE A QUESTION? WE'RE HERE TO HELP</h3>
                    <button className="bg-almond p-2 rounded">CONTACT US</button>
                </div>

                <div className="flex mt-8 items-center lg:mt-0">
                    <FontAwesomeIcon className="text-sunray mr-2 text-xl" icon={faPhone} />
                    <p className="tracking-wide text-lg"><i>757-555-5555</i></p>
                </div>

                <div className="flex mt-8 items-center lg:mt-0">
                    <FontAwesomeIcon className="text-sunray mr-2 text-xl" icon={faLocationDot} />
                    <p className="tracking-wide"><i>77 Tinsley Ave <br /> Suite L <br /> Hampton, VA 23666</i></p>
                </div>

            </footer>
        </>
    );
}

export default Footer;