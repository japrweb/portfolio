import React from 'react'

function Contact() {
  return (
    <div name="contact" className='w-full h-screen bg-[#0e0e0e] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/445d41c0-bf81-4a1d-bfd4-7ad0f3ac698d" className='flex flex-col max-w-[800px] p-4 w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#6BD425] text-gray-300'>
                  <i class="fa-solid fa-envelope pr-2"></i> 
                  Contact
                </p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email to <a href="mailto:japr893@gmail.com" target="_blank" className='text-gray-500 hover:text-[#6BD425]'>japr893@gmail.com</a></p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email' name='email'/>
            <textarea className='p-2 bg-[#ccd6f6]' name="message" cols="30" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#6BD425] hover:border-[#6BD425] hover:text-[#1b1b1b] font-medium px-6 py-3 my-4 mx-auto ml-0 flex items-center rounded-md duration-700'>Send Form</button>
        </form>

    </div>
  )
}

export default Contact