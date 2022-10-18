import MovingImg from '../images/moving-room.jpg'
import Quote from '../components/quote';
import CarouselComponent from '../components/carouselComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleCarryBox } from '@fortawesome/free-solid-svg-icons';
import { faRoute } from '@fortawesome/free-solid-svg-icons';
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons';

const HomePage = (props) => {
    return (
        <>
            <section className="">
                <div className="bg-sunray pb-3 sm:pb-5 md:pb-10 ">
                    <div className="text-center text-cafe lg:flex lg:flex-col lg:justify-center">
                        {/* hero image */}
                        <div className="order-2 lg:w-8/12 mx-auto">
                            <img className="lg:p-6 lg:mt-4" src={MovingImg} alt="Moving-Room" />
                        </div>

                        <div className="">
                            <div className="mt-5 lg:mt-10">
                                <h1 className="font-alkalami text-5xl tracking-wide">Keep Calm! It's Moving Day!</h1>
                                <p className="text-lg mt-1 tracking-wide">GET A FREE QUOTE BELOW</p>
                            </div>
                            <Quote />
                        </div>
                    </div>
                </div>
                <div className="bg-darkEletricBlue text-white p-16 text-center">
                    <div className="w-10/12 mx-auto">
                        <h2 className="text-center font-alkalami text-4xl tracking-wide">Why Choose Tinsley Moving Services?</h2>
                        <p className="mt-3 font-poppins tracking-wide text-lg">We know moving can be tough, and that's why we are here to help you! Tinsley Moving Services is locally owned and opperated. We have been providing relocation services for more than 5+ years. We can offer a wide variety of moving services that will suite any moving needs. </p>
                    </div>
                    <div className="font-poppins p-7 mx-auto mt-6 w-9/12 lg:w-11/12 lg:grid lg:grid-cols-3 lg:gap-6 lg:items-start">
                        <div className="">
                            <FontAwesomeIcon className="text-4xl" icon={faPeopleCarryBox} />
                            <p className="tracking-wide mt-4">No matter if you moving a storage unit or a five bedroom home An Elite Moving Company is the one to get the job done! We take take pride in our services and will delivery your new home safely and carefully</p>
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <FontAwesomeIcon className="text-4xl" icon={faRoute} />
                            <p className="tracking-wide mt-4">With over 30 years of experience performing local moves, we are well-trained on the best practices to ensure your belongings are kept safe from beginning to end during the entire moving process.</p>
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <FontAwesomeIcon className="text-4xl" icon={faHouseChimney} />
                            <p className="tracking-wide mt-4">Whether you’re on the first floor or in a high-rise, We’ll make sure your items are moved safely and securely without causing any damage to your belongings or apartment!</p>
                        </div>
                    </div>
                </div>
                {/* Reviews */}
                <CarouselComponent />

            </section>
        </>
    );
}

export default HomePage;