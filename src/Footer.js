import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white  py-6" style={{borderTop:' 5px solid #01b7f0'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="mb-2 md:mb-0 md:mr-6">
              <a href="tel:+17082794734" className="hover:underline">+1 (708) 279-4734</a>
            </div>
            <div className="mb-2 md:mb-0 md:mr-6">
              <a target="_blank"  href="mailto:round4gym@gmail.com" className="hover:underline">round4gym@gmail.com</a>
            </div>
          </div>
          <div>
            <a href="https://www.google.com/maps/place/Round+4+Gym/@41.6902338,-87.8198884,17z/data=!3m1!4b1!4m6!3m5!1s0x880e393a11030c23:0x4500477e9a1bc880!8m2!3d41.6902338!4d-87.8198884!16s%2Fg%2F11lcz4vc02?entry=ttu" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:underline">
              8086 W 111th St, Palos Hills, IL 60465
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
