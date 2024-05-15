import React from 'react';

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Weathon Software</h1>
          <nav>
            <a href="#about" className="mx-2 hover:text-gray-400">About</a>
            <a href="#services" className="mx-2 hover:text-gray-400">Services</a>
            <a href="#team" className="mx-2 hover:text-gray-400">Team</a>
            <a href="#contact" className="mx-2 hover:text-gray-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/public/bg.webp)' }}>
        <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Innovating with AI Applications</h2>
            <p className="mb-8">Delivering cutting-edge solutions in software development and research.</p>
            <a href="#about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-white py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
          <p className="text-lg text-center">
            Weathon Software is a dynamic company specializing in both cutting-edge research and software freelancing. Our expertise spans machine learning, web development, and mobile app development. We are dedicated to delivering innovative solutions that leverage the latest advancements in technology. Our team of UBC students is currently engaged in various research and development projects, pushing the boundaries of what is possible in our field.
            {/* Weathon Software is a research-focused machine learning company. We provide both software freelancing and research services, including web and mobile development. Our current project involves cheminformatics research. */}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
                <p>We develop and deploy machine learning models for various applications, leveraging the latest techniques and technologies.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                <p>We create responsive and scalable web applications tailored to meet your business needs and enhance user experience.</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-xl font-semibold mb-4">Mobile Apps</h3>
                <p>We design and develop mobile applications that provide seamless experiences on both Android and iOS platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="bg-white py-16 px-8">
        <div className="container mx-auto w-2/3">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="flex justify-center space-x-8">
            <div className="w-1/3 text-center">
              <img src="/public/marshall.jpg" className="bg-gray-200 aspect-square h-25 center-self rounded-lg"></img>
              <h3 className="text-xl font-semibold">Marshall Guo</h3>
              <p>Machine Learning Developer<br/>Web Developer</p>

            </div>
            <div className="w-1/3 text-center">
              <img src="/public/alex.png" className="bg-gray-200 aspect-square h-25 center-self rounded-lg"></img>
              <h3 className="text-xl font-semibold">Yiyang Du</h3>
              <p>Research Assistant</p>
            </div>

            <div className="w-1/3 text-center">
              <img src="/public/ashar.jpg" className="bg-gray-200 aspect-square h-25 center-self rounded-lg"></img>
              <h3 className="text-xl font-semibold">Muhammad Ashar</h3>
              <p>Research Assistant<br/>Web Developer</p>
            </div>

          </div>
        </div>
      </section>

      <section id="work" className="bg-gray-100 py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Work</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/4 px-4 mb-8 flex">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col flex-grow">
                <h4 className="text-xl font-semibold mb-2">Chemistry Education Using Machine Learning</h4>
                <p className="flex-grow">We are developing advanced machine learning models to enhance chemistry education. Our goal is to create intelligent tutoring systems that provide personalized learning experiences for students.</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8 flex">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col flex-grow">
                <h4 className="text-xl font-semibold mb-2">Encoding Molecular Information</h4>
                <p className="flex-grow">This project focuses on using machine learning to encode and interpret molecular data. By doing so, we aim to facilitate drug discovery and other scientific research areas by providing accurate and efficient molecular analysis.</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8 flex">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col flex-grow">
                <h4 className="text-xl font-semibold mb-2">GCMS Using Machine Learning</h4>
                <p className="flex-grow">We are integrating machine learning with Gas Chromatography-Mass Spectrometry (GCMS) to improve the identification and quantification of chemical substances. This project aims to enhance the accuracy and speed of GCMS analysis, making it a more powerful tool in various scientific fields.</p>
              </div>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8 flex">
              <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col flex-grow">
                <h4 className="text-xl font-semibold mb-2">Bus Pass Application</h4>
                <p className="flex-grow">We have developed a comprehensive bus pass application that streamlines the process of obtaining and managing bus passes for commuters. The app offers a user-friendly interface, real-time updates, and secure payment options to enhance the overall commuting experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <p className="text-center">
            Email us at{' '}
            <a href="mailto:email@weasoft.com" className="text-blue-500">
              email@weasoft.com
            </a>
          </p>

          <p className="text-center">
            Github: {' '}
            <a href="https://github.com/weathon" className="text-blue-500">
              https://github.com/weathon
            </a>
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <div className="container mx-auto">
          <p>&copy; 2024 Weathon Software. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
