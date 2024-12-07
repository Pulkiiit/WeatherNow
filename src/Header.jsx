/* eslint-disable react/prop-types */
import { useState } from "react";
const Header = ({ setCity }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = event => {
    event.preventDefault();
    setCity(searchQuery);
  };

  return (
    <nav className='bg-blue-500 shadow-md p-4 mb-4'>
      <div className='container mx-auto flex items-center justify-between flex-wrap'>
        {/* Logo Section */}
        <div className='w-full md:w-auto flex justify-center md:justify-start items-center space-x-3'>
          <img src='weather-svgrepo-com.svg' alt='logo' className='w-10 h-10' />
          <span className='text-white text-xl font-bold'>WeatherNow</span>
        </div>

        {/* Search Form */}
        <div className='w-full md:w-auto mt-4 md:mt-0'>
          <form
            onSubmit={handleSearch}
            className='flex items-center justify-center md:justify-end space-x-2'
          >
            <input
              type='text'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder='Search...'
              className='py-2 px-4 w-full md:w-auto rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300'
            />
            <button
              type='submit'
              className='py-2 px-4 bg-white text-blue-500 rounded-md shadow hover:bg-gray-100 transition'
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
