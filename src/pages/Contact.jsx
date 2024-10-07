import React from 'react'

const Contact = () => {
  return (
    <div className='from-yellow-200 to-pink-200'>
      <div className='flex justify-center items-center flex-col ms-2 '>
        <div className='w-[95vw] mt-16 h-[60px] bg-red-400 font-[500] rounded-tl-[500px] rounded-tr-[120px] rounded-br-[120px]  text-white text-[50px] flex items-center '><h1 className='ml-[30px]'>Contact us</h1>
        </div>
       
        <div className='font-[400] text-[40px] text-gray-500'> +91 638805@@00
          Contact for any type of problem</div>
        <div className='flex flex-wrap mt-5 justify-evenly w-[70vw] ' >
         <div className=' flex flex-wrap w-[300px] font-medium text-[25px] text-gray-800'>
         <p className='mt-[20px] mb-[10px]'>* Contact us about anything related to our company or services. <br /> <br />
        * We'll do our best to get back to you as soon as possible............</p>
         </div>
       
            <div className='flex flex-col h-[400px] w-[300px] justify-evenly gap-2 border-2 p-5 rounded-[20px] border-pink-300'>
              <div className='flex flex-col items-start'>
                <label htmlFor="" className='font-[600] text-center '>Your Name *</label>
                <input type="text" placeholder='  Enter your name ' className='border-2 text-center border-t-7 rounded-[5px] ml-[20px]  h-[40px] w-[250px]' />
              </div>
              <div className='flex flex-col items-start'>
                <label htmlFor="" className='font-[600]'>Phone Number *</label>
                <input type="text" placeholder='  Enter your phone ' className='border-2 border-t-7 text-center rounded-[5px] ml-[20px]  h-[40px] w-[250px]' />
              </div>
              <div className='flex flex-col items-start'>
                <label htmlFor="" className='font-[600]'>Your Email *</label>
                <input type="text" placeholder='  xyz@gmail.com ' className='border-2 border-t-7 text-center rounded-[5px] ml-[20px]  h-[40px] w-[250px]' />
              </div>
              <div className='flex flex-col items-start'>
                <label htmlFor="" className='font-[600]'>Address *</label>
                <input type="text" placeholder='  Enter your Address ' className='border-2 text-center border-t-7 rounded-[5px] ml-[20px]  h-[40px] w-[250px]' />
              </div>
              <div className='flex justify-center items-end'>
       <button type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-10 py-2.5 text-center  mb-2 rounded-br-[180px] rounded-tl-[180px]">Submit</button>
       </div>
          
            </div>
          </div>
        </div>
      
      </div>
  
  )
}

export default Contact
