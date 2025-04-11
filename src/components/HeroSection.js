import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="container mx-auto md:px-6 py-12 flex flex-col md:flex-row justify-between items-center">

        <div className="md:w-1/2 px-6 md:px-0">
          <h1 className="text-4xl font-bold mb-4 tracking-wide">Best house plants varieties</h1>
          <div className="flex space-x-4 mb-6">
            <button className="bg-black hover:bg-green-600 text-white px-6 py-3 text-lg rounded-full transition duration-300">
              Khám phá ngay
            </button>
            <button className="border border-green-500 text-green-500 hover:bg-green-50 px-6 py-3 text-lg rounded-full transition duration-300">
              Tìm hiểu thêm
            </button>
          </div>
          <p className="text-xl font-semibold leading-relaxed">
            Beautiful living greenery for your home<br/> 
            and office. Our plants are carefully<br/> 
            selected to bring life and color<br/> 
            to your space.
          </p>
        </div>
        
        <div className="md:w-1/2 flex justify-end">
          <div className="rounded-l-lg shadow-lg h-full" style={{ maxWidth: "100%" }}>
            <img 
              src="/banner.png" 
              alt="Mầm cây đẹp" 
              className="w-full h-full object-cover object-left rounded-l-lg" 
              style={{ maxHeight: "1000px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
