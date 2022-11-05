import React from 'react'
import { useState, useEffect } from 'react' 
import { useFormik } from 'formik'
import { basicSchema } from '../schemas'

const Contact = () => { 
  const onSubmit = async (values, actions) => { 
    //faking an API request for easy and relatable flow
    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()
    console.log(values)
  }

  const [agree, setAgree] = useState(false) 
  const { values, handleBlur, isSubmitting, handleChange, handleSubmit, errors, touched } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "", 
      terms_and_condition: false,
    },
    validationSchema: basicSchema,
    onSubmit
  })

  console.log(errors)

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

          <form className='mt-12' onSubmit={handleSubmit}>
             <div className="grid grid-cols-1 lg:grid-cols-2 mb-6 gap-6">
                <div>
                  <label htmlFor="first_name" className='form-label'>First Name</label>
                  <input type="text" value={values.first_name} onChange={handleChange} onBlur={handleBlur} name="first_name" id="first_name" placeholder='Enter your first Name' className={`form-input ${errors.first_name && touched.first_name ? 'border-error' : ""}`} />
                  {
                    errors.first_name && touched.first_name && <p className='font-inter text-sm text-error mt-1'>{errors.first_name}</p>
                  }
                </div> 
                <div>
                  <label htmlFor="last_name" className='form-label'>Last Name</label>
                  <input type="text" value={values.last_name} onChange={handleChange} onBlur={handleBlur} name="last_name" id="last_name" placeholder='Enter your last name' className={`form-input ${errors.last_name && touched.last_name ? 'border-error' : ''}`} />
                  {
                    errors.last_name && touched.last_name && <p className='font-inter text-sm text-error mt-1'>{errors.last_name}</p>
                  }
                </div>
             </div>

             <div className='mb-6'>
               <label htmlFor="email" className='form-label'>Email</label>
               <input type="email" 
                value={values.email}
                onChange={handleChange} onBlur={handleBlur}
                name="email" id="email" className={`form-input ${errors.email && touched.email ? 'border-error' : ''}`} placeholder='yourname@email.com' />
                {
                  errors.email && touched.email && <p className='font-inter text-sm text-error mt-1'>{errors.email}</p>
                }
             </div>

             <div className='mb-6'>
               <label htmlFor="message" className='form-label'>Message</label>
               <textarea name="message" value={values.message} onChange={handleChange} onBlur={handleBlur} id="message" cols="30" rows="5" className={`form-input ${errors.message && touched.message ? 'border-error' : ''}`} placeholder="Send me a message and I'll reply you as soon as possible..."  />
               {
                  errors.message && touched.message && <p className='font-inter text-sm text-error mt-1'>{errors.message}</p>
                }
             </div>

             <div className="mb-6">
                <div className='mb-2 flex items-start gap-2'>
                    <input type="checkbox" className='border border-solid border-[#D0D5DD] rounded-md mt-1.5' name="terms_and_condition" id="terms_and_condition" onChange={handleChange} onBlur={handleBlur}  />
                    <label htmlFor="terms_and_condition" className='font-inter text-base text-gray-600'>You agree to providing your data to Oluwatoyinah who may contact you.</label> 
                </div>
                {
                  errors.terms_and_condition && touched.terms_and_condition && <p className='font-inter text-sm text-error mt-1 ml-3'>{errors.terms_and_condition}</p>
                }
             </div>

             <div>
              <button type="submit" disabled={isSubmitting} id='btn__submit' className={`form-btn ${isSubmitting && 'form-btn-disabled'}`}>Send Message</button>
             </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact