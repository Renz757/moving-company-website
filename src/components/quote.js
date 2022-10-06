import { useState } from "react";


const Quote = (props) => {
   

    const [zipcode1, setZipcode1] = useState('');
    const [zipcode2, setZipcode2] = useState('');
    const [email, setEmail] = useState('');

    function submitHandler(event){
        event.preventDefault()

         let formState = {
            zipcode1: zipcode1,
            zipcode2: zipcode2,
            email: email
         }

         console.log(formState)
         try {
            fetch(`https://api.zip-codes.com/ZipCodesAPI.svc/1.0/CalculateDistance/ByZip?fromzipcode=${zipcode1}&tozipcode=${zipcode2}&key=${process.env.REACT_APP_APIKEY}`)
                .then(response => response.json())
                .then(data => console.log(data))
            
         } catch (error) {
            alert('error!!')
         }
         
    }
    

    return(
        <>  
            <form 
                className="font-poppins text-cafe flex flex-col mt-6 w-7/12 mx-auto mt-5 sm:6/12 md:w-5/12 lg:w-4/12"
                onSubmit={submitHandler}
            >
                <div className="flex justify-between flex-col">
                    <label className="">From:</label>
                    <input 
                        type='text' 
                        className="rounded"
                        placeholder="zipcode"
                        onChange={(event) => setZipcode1(event.target.value)}
                    />
                </div>

                <div className="flex justify-between flex-col">
                    <label className="">To:</label>
                    <input 
                        type='text' 
                        className="rounded"
                        placeholder="zipcode"
                        onChange={(event) => setZipcode2(event.target.value)}
                    />
                </div>

                <div className="flex justify-between flex-col">
                    <label>Email:</label>
                    <input 
                        type='text' 
                        className="rounded"
                        placeholder="Example@email.com"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <button type='submit' className="mt-5 bg-darkEletricBlue text-white p-3 rounded">Get A Quote Now</button>
            </form>
        </>
    );
}

export default Quote;