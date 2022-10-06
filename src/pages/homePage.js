import MovingImg from '../images/moving-room.jpg'
import Quote from '../components/quote';
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

                <div id="default-carousel" className="relative bg-manatee" data-carousel="slide">
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                  
                        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20" data-carousel-item>
                            <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800"></span>
                            Slide 1
                        </div>
                       
                        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10" data-carousel-item>
                            SLide 2
                        </div>
                        
                        <div className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10" data-carousel-item>
                            Slide 3
                        </div>
                    </div>
                
                    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                        <button type="button" className="w-3 h-3 rounded-full bg-white dark:bg-gray-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                        <button type="button" className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                    </div>
                
                    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev="">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next="">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                            <span className="sr-only">Next</span>
                        </span>
                    </button>
                </div>

            </section>
        </>
    );
}

export default HomePage;