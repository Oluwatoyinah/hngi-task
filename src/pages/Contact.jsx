import React from 'react'
import { useEffect } from 'react'

const Contact = () => { 
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <div className="container-fluid bg-main-gray pt-20 mb-5 sm:mb-10 min-h-[70vh]">
      <div className="container-xl mx-auto">
        <div className='w-11/12 md:w-3/5 mx-auto'>
          
          <div>
             <h3 className='font-inter font-semibold text-4xl tracking-[-2px] mb-4 md:mb-5'>Contact Me</h3>
             <p className='font-inter font-normal text-lg md:text-xl text-gray-600'>Hi there, contact me to ask me about anything you have in mind.</p>
          </div>

          <form className='mt-12'>
             <div className="grid grid-cols-1 lg:grid-cols-2 mb-6 gap-6">
                <div>
                  <label htmlFor="first_name" className='form-label'>First Name</label>
                  <input type="text" name="first_name" id="first_name" placeholder='Enter your first Name' className='form-input' />
                </div>
                <div>
                  <label htmlFor="last_name" className='form-label'>Last Name</label>
                  <input type="text" name="last_name" id="last_name" placeholder='Enter your last name' className="form-input" />
                </div>
             </div>

             <div className='mb-6'>
               <label htmlFor="email" className='form-label'>Email</label>
               <input type="email" name="email" id="email" className='form-input' placeholder='yourname@email.com' />
             </div>

             <div className='mb-6'>
               <label htmlFor="message" className='form-label'>Message</label>
               <textarea name="message" id="message" cols="30" rows="5" className='form-input' placeholder="Send me a message and I'll reply you as soon as possible..." />
             </div>

             <div className='mb-6 flex items-start gap-2'>
              <input type="checkbox" className='border border-solid border-[#D0D5DD] rounded-md mt-1.5' name="contact" id="contact" />
              <label htmlFor="contact" className='font-inter text-base text-gray-600'>You agree to providing your data to Oluwatoyinah who may contact you.</label>
             </div>

             <div>
              <button type="submit" id='btn__submit' className='form-btn'>Send Message</button>
             </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact