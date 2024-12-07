/* eslint-disable react/prop-types */
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "./assets/weather-svgrepo-com.jpg";
const Header = ({ setCity }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = event => {
    event.preventDefault();
    setCity(searchQuery);
  };

  return (
    <nav
      className='navbar navbar-expand-lg navbar-light p-2 mb-4 shadow rounded'
      style={{ background: "linear-gradient(to right, #0286C9, #20A2DF)" }}
    >
      <div className='container-fluid'>
        {/* Logo Section */}
        <div className='d-flex align-items-center justify-content-center justify-content-md-start w-100 py-2'>
          <img src={logo} alt='logo' className='w-12 h-12' />
          <span className='text-white fs-4 fw-bold font-serif ms-3'>
            WeatherNow
          </span>
        </div>

        {/* Search Form */}
        <div className='d-flex w-100 justify-content-center justify-content-md-end mt-4 mt-md-0'>
          <form
            onSubmit={handleSearch}
            className='d-flex align-items-center justify-content-center'
          >
            <input
              type='text'
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder='Search...'
              className='form-control py-2 px-4 w-100 w-md-auto rounded-3 border border-gray-300 focus:outline-none'
            />
            <button
              type='submit'
              className='btn btn-light text-blue-500 rounded-3 ms-2 shadow-sm'
              style={{
                transition: "all 0.1s ease-in-out",
              }}
              onMouseEnter={e => {
                e.target.style.backgroundColor = "#3B82F6";
                e.target.style.color = "white";
                e.target.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={e => {
                e.target.style.backgroundColor = "";
                e.target.style.color = "";
                e.target.style.boxShadow = "";
              }}
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
