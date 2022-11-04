import React from 'react'
import { Link } from 'react-router-dom'
import BackIcon from '../assets/images/back-icon.png'

const ErrorPage = () => {
  return (
    <div className="container-fluid bg-main-gray py-5 min-h-[80vh] flex items-center">
        <div className="container mx-auto">
            <div className='w-10/12 mx-auto'>
                 <div className='mb-5'>
                    <p className="text-purple font-inter text-base font-semibold">404 error</p>
                    <h2 className='text-primary font-semibold font-inter text-4xl md:text-5xl lg:text-6xl tracking-[-0.02em] mb-5'>We can’t find that page</h2>
                    <p className='text-[#475467] font-normal text-sm md:text-xl font-inter'>Sorry, the page you are looking for doesn't exist or has been moved.</p>
                 </div>

                 <div className="buttons flex flex-col-reverse sm:flex-row gap-3 sm:items-center">
                    <Link to='/'>
                      <button className='flex items-center gap-5 justify-center bg-white sm:py-4 py-3 sm:px-7 px-4 sm:text-lg font-semibold rounded-lg border border-solid border-[#D0D5DD] min-w-[164px] w-full'>
                        <span><img src={BackIcon} alt="back icon" width="14" /></span>
                        <span>Go back</span>
                      </button>
                    </Link>
                    <Link to='/'>
                      <button className='bg-purple text-[#fff] sm:py-4 py-3 sm:px-7 px-4 sm:text-lg font-semibold rounded-lg min-w-[164px] w-full'>Take me home</button>
                    </Link>
                 </div>
            </div>
        </div> 
    </div>
  )
}

export default ErrorPage