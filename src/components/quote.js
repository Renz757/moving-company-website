const Quote = (props) => {
    // REdLine ZipCode API for getting distance between 2 entered zip codes 
    return(
        <>  
            <form className="font-poppins text-cafe flex flex-col mt-6 w-7/12 mx-auto mt-5 sm:6/12 md:w-5/12 lg:w-4/12">
                <div className="flex justify-between flex-col">
                    <label className="">From:</label>
                    <input 
                        type='text' 
                        className="rounded"
                        placeholder="zipcode"
                    />
                </div>

                <div className="flex justify-between flex-col">
                    <label className="">To:</label>
                    <input 
                        type='text' 
                        className="rounded"
                        placeholder="zipcode"
                    />
                </div>

                <div className="flex justify-between flex-col">
                    <label>Email:</label>
                    <input 
                        type='text' 
                        className="rounded"
                        placeholder="Example@email.com"
                    />
                </div>
                <button className="mt-5 bg-darkEletricBlue text-white p-3 rounded">Get A Quote Now</button>
            </form>
        </>
    );
}

export default Quote;