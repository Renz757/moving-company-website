const Quote = (props) => {
    // REdLine ZipCode API for getting distance between 2 entered zip codes 
    return(
        <>  
            <form className="flex flex-col ">
                <div className="flex justify-around">
                    <label>From:</label>
                    <input 
                        type='text' 
                        className=""
                        placeholder="zipcode"
                    />
                </div>

                <div className="flex justify-around">
                    <label>To:</label>
                    <input 
                        type='text' 
                        className=""
                        placeholder="zipcode"
                    />
                </div>

                <div className="flex justify-around">
                    <label>Email:</label>
                    <input 
                        type='text' 
                        className=""
                        placeholder="Example@email.com"
                    />
                </div>
                
                

            </form>
        </>
    );
}

export default Quote;