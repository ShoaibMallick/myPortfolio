import React from 'react'

export default function Contact() {
  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-amber-100 py-12 px-6">
  <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-12 w-full max-w-5xl animate-fadeInUp">
    
    {/* LEFT (Text block) */}
    <div className="md:col-span-2 flex flex-col justify-center items-center text-center p-8 bg-white rounded-3xl shadow-lg border border-amber-200">
      <h4 className="text-3xl font-extrabold text-amber-900 mb-4 tracking-tight">
        Contact Us
      </h4>
      <p className="text-amber-700 font-light max-w-md leading-relaxed">
        Nice to meet you! Enter your details and let’s start a conversation. Whether you want to collaborate, request a quote, or simply say hello — I’m here to listen.
      </p>
      {/* Optional social/link buttons could be added here */}
    </div>

    {/* RIGHT (Contact form) */}
    <div className="md:col-span-2 flex justify-center">
      <form className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-10 border border-amber-200 transition-transform duration-500 hover:scale-[1.02]">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-semibold text-amber-800">
              Your Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full bg-amber-50 placeholder-amber-400 text-amber-900 border border-amber-300 rounded-lg px-4 py-3 text-base font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500 shadow-sm hover:border-amber-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-amber-800">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full bg-amber-50 placeholder-amber-400 text-amber-900 border border-amber-300 rounded-lg px-4 py-3 text-base font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500 shadow-sm hover:border-amber-400"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-semibold text-amber-800">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              className="w-full bg-amber-50 placeholder-amber-400 text-amber-900 border border-amber-300 rounded-lg px-4 py-3 text-base font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500 shadow-sm hover:border-amber-400"
              placeholder="Subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-semibold text-amber-800">
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full bg-amber-50 placeholder-amber-400 text-amber-900 border border-amber-300 rounded-lg px-4 py-3 text-base font-medium transition duration-300 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-500 shadow-sm hover:border-amber-400 resize-none"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="mt-8 w-full rounded-2xl bg-gradient-to-r from-amber-700 to-amber-500 text-white font-bold py-3 shadow-lg hover:from-amber-800 hover:to-amber-600 focus:outline-none focus:ring-4 focus:ring-amber-300 active:scale-95 transition-transform duration-150"
        >
          Submit
        </button>
      </form>
    </div>

  </div>
</div>


  )
}
