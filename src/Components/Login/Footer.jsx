import React from 'react'
import { FaGlobe } from 'react-icons/fa'

function Footer() {
  return (
    <div className='relative z-10 flex flex-col gap-10 px-6 md:px-[9vw] bg-black py-10'>

      {/* CTA Section */}
      <div className='w-full'>
        <div className='flex justify-center flex-col items-center w-full gap-6 mt-5'>
          <h1 className='text-white text-lg md:text-xl text-center'>
            Ready to watch? Enter your email to create or restart your membership.
          </h1>

          <form className='flex flex-col sm:flex-row justify-center items-center gap-4 w-full'>
            <input
              type="email"
              placeholder='Email'
              className='py-3 sm:py-4 w-full sm:w-[60%] md:w-[50%] px-4 text-white bg-transparent border border-white rounded-md focus:outline-none'
            />
            <button className='w-full sm:w-[30%] md:w-[15%] py-3 sm:py-4 bg-[#E50914] hover:bg-[#C11119] transition rounded-md text-white font-bold'>
              Get Started
            </button>
          </form>
        </div>
      </div>

      {/* Help text */}
      <h1 className='text-white text-sm md:text-md'>
        Questions? Call 000-800-919-1743
      </h1>

      {/* Grid Links */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-white text-sm underline'>
        <div className='flex flex-col gap-2'>
          <span>FAQ</span>
          <span>Account</span>
          <span>Investor Relations</span>
          <span>Ways to Watch</span>
        </div>
        <div className='flex flex-col gap-2'>
          <span>Privacy</span>
          <span>Corporate Information</span>
          <span>Speed Test</span>
          <span>Only on Netflix</span>
        </div>
        <div className='flex flex-col gap-2'>
          <span>Help Centre</span>
          <span>Media Centre</span>
          <span>Terms of Use</span>
          <span>Cookie Preferences</span>
        </div>
        <div className='flex flex-col gap-2'>
          <span>Contact Us</span>
          <span>Legal Notices</span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='flex flex-col items-start gap-4 mt-10 text-white'>
        <button className='flex items-center gap-2 px-4 py-1 border border-white rounded-md text-sm hover:scale-105 transition'>
          <FaGlobe /> English
        </button>
        <h3 className='font-bold text-sm'>Netflix India Made by Vinay</h3>
        <p className='text-[12px]'>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </div>
    </div>
  )
}

export default Footer
