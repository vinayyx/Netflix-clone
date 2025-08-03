import React, { useState } from 'react';
import { Link } from "react-router-dom"
import { singup, login } from "../../../firebase"
import loadingimage from "../../assets/netflix_spinner.gif"
import Navbar from '../SIngup/Navbar'
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

function Hero() {
    const [state, setState] = useState("SignUp");
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [passward, setPassward] = useState("")
    const [loading, setLoading] = useState(false)

    const handlesumbit = async (e) => {
        e.preventDefault()
        setLoading(true)

        if (state === "SignUp") {
            await singup(email, name, passward)
        } else {
            await login(email, passward)
        }

        setLoading(false)
    }

    if (loading) {
        return (
            <div className='w-full h-screen flex justify-center items-center absolute z-20'>
                <img className='w-[60px]' src={loadingimage} alt="Loading..." />
            </div>
        )
    }

    return (
        <div className='relative z-20 flex flex-col items-center w-full text-white h-screen '>
            <div className='w-full'>
                <Navbar />
            </div>

            <div className='flex flex-col md:flex-row w-full h-full justify-center items-center gap-8 px-4 md:px-12'>
                <div className='w-full max-w-md bg-black bg-opacity-60 p-8 rounded-lg shadow-lg'>
                    <h1 className='text-3xl md:text-4xl font-bold mb-6 text-center'>
                        {state === "SignUp" ? "Sign Up" : "Sign In"}
                    </h1>

                    <form className='flex flex-col gap-4' onSubmit={handlesumbit}>
                        {state === "SignUp" && (
                            <div className='relative'>
                                <FaUser className='absolute top-3 left-3 text-white opacity-60' />
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type="text"
                                    placeholder='Name'
                                    className='w-full pl-10 py-3 rounded-md bg-transparent border border-white text-white placeholder-white/70 hover:scale-[1.02] transition'
                                />
                            </div>
                        )}

                        <div className='relative'>
                            <FaEnvelope className='absolute top-3 left-3 text-white opacity-60' />
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                placeholder='Email'
                                className='w-full pl-10 py-3 rounded-md bg-transparent border border-white text-white placeholder-white/70 hover:scale-[1.02] transition'
                            />
                        </div>

                        <div className='relative'>
                            <FaLock className='absolute top-3 left-3 text-white opacity-60' />
                            <input
                                onChange={(e) => setPassward(e.target.value)}
                                value={passward}
                                type="password"
                                placeholder='Password'
                                className='w-full pl-10 py-3 rounded-md bg-transparent border border-white text-white placeholder-white/70 hover:scale-[1.02] transition'
                            />
                        </div>

                        <button
                            type="submit"
                            className='py-3 bg-[#E50914] rounded-md text-white font-bold hover:bg-[#C11119] hover:scale-105 transition'
                        >
                            {state === "SignUp" ? "Register" : "Login"}
                        </button>

                        <p className='text-center opacity-70 text-sm'>OR</p>

                        <button
                            type="button"
                            onClick={() => setState(state === "SignUp" ? "SignIn" : "SignUp")}
                            className='py-3 bg-[#E50914] rounded-md text-white font-bold hover:bg-[#C11119] hover:scale-105 transition'
                        >
                            {state === "SignUp" ? "Switch to Sign In" : "Switch to Sign Up"}
                        </button>
                    </form>

                    <div className='text-sm mt-4 flex justify-between items-center'>
                        <Link to="/forgotpassward" className='text-blue-400 hover:underline'>Forget Password?</Link>
                    </div>

                    <p className='text-xs text-white opacity-50 mt-4'>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
