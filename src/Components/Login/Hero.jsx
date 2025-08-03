import React from 'react'
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";

function Hero() {
    const navigate = useNavigate();

    const handleSumbit = async (e) => {
        e.preventDefault();
        navigate("/login");
    };

    return (
        <div className='relative z-10 flex justify-center items-center w-full text-white h-screen px-4 md:px-10 '>
            <div className='w-full md:w-[80%] lg:w-[50%] flex flex-col justify-start gap-4 items-center text-center'>
                <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight'>Unlimited movies, TV</h1>
                <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl leading-tight'>shows and more</h1>
                <h2 className='text-base md:text-lg lg:text-xl text-gray-300'>Starts at ₹149. Cancel at any time</h2>

                <div className='flex flex-col items-center w-full gap-4 mt-6'>
                    <h1 className='text-sm md:text-base text-gray-300'>
                        Ready to watch? Enter your email to create or restart your membership.
                    </h1>

                    <form
                        onSubmit={handleSumbit}
                        className='flex flex-col sm:flex-row justify-center items-center gap-3 w-full'
                    >
                        <div className='relative w-full sm:w-[70%]'>
                            <MdEmail className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-400 text-xl' />
                            <input
                                type="email"
                                placeholder='Email'
                                className='w-full py-3 pl-12 pr-4 text-white rounded-md border border-white bg-transparent outline-none focus:ring-2 focus:ring-red-500 placeholder:text-gray-400'
                            />
                        </div>
                        <button
                            type='submit'
                            className='w-full sm:w-[30%] py-3 bg-[#E50914] hover:bg-[#C11119] text-white font-bold rounded-md transition-transform transform hover:scale-105'
                        >
                            Get Started
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Hero;
