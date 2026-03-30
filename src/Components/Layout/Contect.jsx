import React from 'react'
import Logo from '../../assets/Logo.png'


const Contect = ({darkMode}) => {
  return (
    <section
    id='contact'
    style={{
        backgroundColor:darkMode ? "#111827" : '#f9fafb'
    }}
    className='relative py-10 sm:py-8 md:py-16 lg:py-20 overflow-x-clip'
    >
      <div className='container mx-auto px-4 sm:px lg:px-8'>
        <div className='text-center mb-8 sm:mb-10 md:mb-12'
        data-aos="fade-up"
        >
          <h2
          className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4'
          style={{
            color:darkMode ? '#fff' : '#111827'
          }}
          >
            Get In <span
            style={{
              background: 'linear-gradient(to right,#f97316 ,#f59e0b)',
              WebkitBackgroundClip:'text',
              backgroundClip:'text',
              color:'transparent'
            }}
            >
              Touch
            </span>
          </h2>
          <p className='text-base sm:text-lg md:text-xl'
          style={{
            color:darkMode ? '#d1d5db' : '#6b7280'
          }}
          >
            Let's discuss your project and find the best solution for your needs.
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center'>
          <div className='flex justify-center order-2 lg:order-1 sm:hidden md:hidden lg:block'
          data-aos="fade-up"
          data-aos-delay="500"
          >
            <img src={Logo} alt="Logo"
            className='w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain' />
          </div>
        {/* Form */}
          <form
          style={{
            
            background: darkMode
            ? 'linear-gradient(to right,#1f2937 ,#111827)'
            : 'linear-gradient(to right,#e5e7eb ,#374151)',
            borderColor: darkMode ? '#374151' : '#e5e7eb'
          }}
          className='rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2'
          data-aos="fade-left"
          data-aos-delay="500"
          >
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-4 sm:gap-2 mb-4 sm:mb-2'>
              {/* Name */}
              <div className='mb-3 sm:mb-4'>
                <label htmlFor="name" className='block text-lg font-medium mb-2'
                style={{
                  color:darkMode ? '#d1d5db' : '#6b7280'
                }}
                >
                  Name
                </label>
                <input type="text" id="name" className='w-full px-3 sm:px-4 py-2 sm:py-3 shadow-lg rounded-lg text-sm sm:text-base focus-visible:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/60 transition-all'required
                style={{
                  backgroundColor:darkMode ? '#374151' : '#e5e7eb',
                  borderColor:darkMode ? '#374151' : '#e5e7eb',
                  color:darkMode ? '#d1d5db' : '#6b7280'
                }}
                placeholder='Enter your name'
                />
              </div>
              {/* Email */}
              <div className='mb-3 sm:mb-4'>
                <label htmlFor="email" className='block text-lg font-medium mb-2'
                style={{
                  color:darkMode ? '#d1d5db' : '#6b7280'
                }}
                >
                  Email
                </label>
                <input type="email" id="name" className='w-full px-3 sm:px-4 py-2 sm:py-3 shadow-lg rounded-lg text-sm sm:text-base focus-visible:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/60 transition-all'required
                style={{
                  backgroundColor:darkMode ? '#374151' : '#e5e7eb',
                  borderColor:darkMode ? '#374151' : '#e5e7eb',
                  color:darkMode ? '#d1d5db' : '#6b7280'
                }}
                placeholder='Enter your email'
                />
              </div>
            </div>

              {/* Message */}
              <div className='mb-3 sm:mb-4'>
                <label htmlFor="Message" className='block text-lg font-medium mb-2'
                style={{
                  color:darkMode ? '#d1d5db' : '#6b7280'
                }}
                >
                  Message
                </label>
                <textarea type="textarea" id="Message" rows={4}
                className='w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg shadow-lg text-sm sm:text-base focus-visible:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/60 transition-all mb-3 sm:mb-4 resize-none'required
                style={{
                  backgroundColor:darkMode ? '#374151' : '#e5e7eb',
                  borderColor:darkMode ? '#374151' : '#e5e7eb',
                  color:darkMode ? '#d1d5db' : '#6b7280'
                }}
                placeholder='Your Message'
                />
              </div>
                {/* Button sand form */}
                <button type='submit'
                style={{
                  background:'linear-gradient(to right,#f97316 ,#f59e0b)'
                }}
                className='w-full py-2 sm:py-3 text-white font-semibold shadow-lg rounded-lg text-lg sm:text-base hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all duration-300 cursor-pointer'
                >
                  Send Message
                </button>
            
          </form>
          
        </div>

      </div>
      

    </section>
  )
}

export default Contect