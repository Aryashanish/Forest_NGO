import './Style.css'; // Import the custom CSS file
import { HeaderVideo } from '../VideoCart/HeaderVideo';
// import { useState } from 'react';

export default function Header() {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Header Overlay */}
      <header className="absolute top-0 left-0 right-0 z-10 bg-opacity-50 bg-black text-white flex justify-between items-center px-4 py-2">
        <div className="flex items-center">
          <img src="https://i.pinimg.com/736x/49/55/51/4955513c2bccf31aed04923ef8ca85bb.jpg" alt="Save Soil Logo" className="w-12 h-12 rounded-full" />
          <nav className="ml-4 space-x-4">
            <a href="#" className="link">Soil</a>
            <a href="#" className="link">Events</a>
            <a href="#" className="link">Supporters</a>
            <a href="#" className="link">Resources</a>
            <a href="#" className="link">About</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">ACTION NOW</button>
          {/* <div className="relative">
            <button className="flex items-center" onClick={toggleDropdown}>
              <i className="bi bi-globe"></i>
              <span className="ml-2">English</span>
            </button>
            <ul className={`absolute mt-2 bg-white text-black rounded shadow-lg ${dropdownOpen ? 'block' : 'hidden'}`}>
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">English</a></li>
              <li className="px-4 py-2 hover:bg-gray-200"><a href="#">Español</a></li>
            </ul>
          </div> */}
        </div>
      </header>
    <HeaderVideo />
    </div>
  );
}
