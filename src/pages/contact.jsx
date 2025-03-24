import React, { useState } from 'react';
import bg from '../assets/bg.jpg'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Email details
    const receiverEmail = 'pc@students.iitmandi.ac.in';
    const subject = `Contact from ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    // Create mailto link
    const mailtoLink = `mailto:${receiverEmail}?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open the email client
    window.location.href = mailtoLink;
    
    console.log('Email link opened with form data:', formData);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0" 
           style={{ backgroundImage: `url(${bg})` }} />
      
      {/* Dot overlay */}
      <div className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'radial-gradient(circle, #eeeeee 2px, transparent 2px)',
          backgroundSize: '64px 64px',
          opacity: 0.3
        }} />
      
      {/* Content container */}
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
          {/* Contact Form */}
          <div className="w-full p-6 md:p-8 rounded-lg shadow-lg bg-black bg-opacity-30 backdrop-blur-sm order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Contact Us</h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md focus:ring-2 focus:ring-white text-black transition duration-300 focus:outline-none bg-white"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md focus:ring-2 text-black transition duration-300 focus:ring-white focus:outline-none bg-white"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="bg-transparent">
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full text-black px-4 py-3 rounded-md focus:ring-2 focus:ring-white focus:outline-none bg-white"
                  rows="4"
                  placeholder="Your Message"
                  required 
                ></textarea>
              </div>

              <div className="pt-2 bg-transparent">
                <button
                  type="submit"
                  className="w-full bg-white opacity-80 border-white transition-all py-3 hover:shadow-[0_0_5px_2px_rgba(255,255,255,0.8)] duration-300 rounded-md text-black font-bold"
                >
                  Send Email
                </button>
              </div>
            </form>
          </div>

          {/* Profile */}
          <div className="w-full flex flex-col items-center justify-center text-center space-y-4 p-6 md:p-8 rounded-lg shadow-lg bg-black bg-opacity-30 backdrop-blur-sm order-1 md:order-2">
            <img
              src="/teamphoto/abhijheetjha.jpeg"
              alt="Profile"
              className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover mb-3 border-white border-4"
            />
            <h3 className="text-xl md:text-2xl font-bold text-white">Abhijeet Jha</h3>
            <p className="text-gray-300">Coordinator</p>
            <p className="text-gray-300">Phone: +91 92637 30646</p>
            <div className="flex space-x-5 mt-3">
              <a href="https://instagram.com" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition duration-300">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;