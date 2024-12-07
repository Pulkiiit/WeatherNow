/* eslint-disable react/prop-types */
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import logo from "./assets/weather-svgrepo-com.jpg";
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
          <svg
            width='80px'
            height='80px'
            viewBox='0 0 1024 1024'
            className='icon'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M910.3 836.6H173.1c-27.4 0-49.8-22.3-49.8-49.8V289.9c0-27.4 22.3-49.8 49.8-49.8h737.3c27.4 0 49.8 22.3 49.8 49.8v496.8c-0.1 27.5-22.4 49.9-49.9 49.9z'
              fill='#A7B8C6'
            />
            <path
              d='M272.5 201H118.8c-22.8 0-41.3 18.5-41.3 41.3V756c0 22.8 18.5 41.3 41.3 41.3H873c22.8 0 41.3-18.5 41.3-41.3V242.3c0-22.8-18.5-41.3-41.3-41.3H272.5z'
              fill='#7ACAE7'
            />
            <path
              d='M722.1 206.5L568.6 359.9c-2.8 2.8-7.3 2.8-10 0-2.8-2.8-2.8-7.3 0-10L712 196.4c2.8-2.8 7.3-2.8 10 0 2.8 2.8 2.8 7.3 0.1 10.1zM917.4 576.6L754.3 739.7c-2.8 2.8-7.3 2.8-10 0-2.8-2.8-2.8-7.3 0-10l163.1-163.1c2.8-2.8 7.3-2.8 10 0 2.7 2.7 2.7 7.2 0 10zM283.4 383.2c2.8-2.8 7.3-2.8 10 0 2.8 2.8 2.8 7.3 0 10L139.9 546.7c-2.8 2.8-7.3 2.8-10 0-2.8-2.8-2.8-7.3 0-10M320.1 651.6l-149 149c-2.8 2.8-7.3 2.8-10 0-2.8-2.8-2.8-7.3 0-10l149-149c2.8-2.8 7.3-2.8 10 0 2.7 2.7 2.7 7.2 0 10z'
              fill='#FFFFFF'
            />
            <path
              d='M873 811H118.8c-30.3 0-54.9-24.6-54.9-54.9V242.3c0-30.3 24.6-54.9 54.9-54.9H873c30.3 0 54.9 24.6 54.9 54.9V756c-0.1 30.3-24.7 55-54.9 55zM118.8 214.6c-15.3 0-27.7 12.4-27.7 27.7V756c0 15.3 12.4 27.7 27.7 27.7H873c15.3 0 27.7-12.4 27.7-27.7V242.3c0-15.3-12.4-27.7-27.7-27.7H118.8z'
              fill='#3E3A39'
            />
            <path
              d='M499.8 660.2c4.8 4.3 7.2 10 7.2 16.8 0 6.6-2.5 12.7-7.6 18.3-2.8 3-8.2 7.2-16.1 12.5-7.9 5.2-12.7 9.8-14.4 13.7H507v11.2h-54c0-8 2.6-14.8 7.7-20.6 2.8-3.3 8.8-8 17.8-14.2 4.7-3.3 8.3-6.2 10.6-8.7 3.4-3.8 5.1-7.9 5.1-12.3 0-4.2-1.1-7.3-3.4-9.4-2.2-2-5.6-3-10.1-3-4.8 0-8.4 1.6-10.7 4.9-2.4 3-3.7 7.6-3.9 13.8h-12.7c0.1-8.7 2.7-15.7 7.6-21 5.1-5.6 11.9-8.5 20.2-8.5 7.5 0 13.7 2.1 18.6 6.5zM553.7 655.2v77.5H541v-62.2c-4.7 4.3-10.6 7.4-17.7 9.4v-12.6c3.4-0.9 7.1-2.4 11.2-4.6 3.8-2.3 7.1-4.9 9.7-7.6h9.5zM605.7 646.3c2.8 2.6 4.1 5.9 4.1 9.8 0 3.8-1.4 7-4.1 9.8-2.8 2.8-6 4.1-9.8 4.1-3.9 0-7.2-1.4-9.8-4.1-2.8-2.7-4.1-5.9-4.1-9.8 0-4 1.4-7.2 4.1-9.8 2.5-2.7 5.8-4.1 9.8-4.1 3.9 0 7.1 1.3 9.8 4.1z m-15 4.5c-1.4 1.4-2.2 3.1-2.2 5.2 0 2 0.7 3.8 2.2 5.2 1.4 1.4 3.2 2.2 5.2 2.2 1.9 0 3.6-0.7 5.2-2.2 1.4-1.6 2.2-3.3 2.2-5.2 0-2-0.7-3.8-2.2-5.2-1.4-1.4-3.2-2.2-5.2-2.2-2 0.1-3.8 0.8-5.2 2.2z'
              fill='#FFFFFF'
            />
            <path
              d='M342.7 416.4m-113 0a113 113 0 1 0 226 0 113 113 0 1 0-226 0Z'
              fill='#EEE4AA'
            />
            <path
              d='M342.7 416.4m-86.7 0a86.7 86.7 0 1 0 173.4 0 86.7 86.7 0 1 0-173.4 0Z'
              fill='#F2D31F'
            />
            <path
              d='M622 425.1c-4.7 0-8.9-2.7-10.8-6.8-17.5-38.4-57.7-64.2-103.5-60.4-47.1 3.9-86.2 40.1-93.7 86.8-1 6.1-1 14.7-0.8 22.1 0.2 7.8-5 14.7-12.6 16.5-26.2 6.1-45.9 29.8-45.9 57.8 0 32.7 26.7 59.4 59.4 59.4H622c48.4 0 87.7-39.3 87.7-87.7 0-48.4-39.3-87.7-87.7-87.7z'
              fill='#C1E1EF'
            />
            <path
              d='M604.5 444.6c-3.8 0-7.1-2.1-8.7-5.5-14.1-30.9-46.5-51.7-83.4-48.7-37.9 3.2-69.4 32.3-75.5 69.9-0.8 4.9-0.8 11.8-0.6 17.8 0.2 6.3-4 11.8-10.2 13.3-21.1 4.9-37 24-37 46.6 0 26.3 21.5 47.8 47.8 47.8h167.5c39 0 70.6-31.6 70.6-70.6s-31.5-70.6-70.5-70.6z'
              fill='#E5F2F8'
            />
            <path
              d='M592.9 461.2c-2.8 0-5.4-1.6-6.6-4.2-10.7-23.4-35.2-39.1-63-36.8-28.7 2.4-52.5 24.5-57.1 52.9-0.6 3.7-0.6 9-0.5 13.5 0.1 4.7-3.1 8.9-7.7 10-16 3.7-28 18.2-28 35.2 0 19.9 16.3 36.2 36.2 36.2H592.8c29.5 0 53.4-23.9 53.4-53.4 0.1-29.4-23.8-53.4-53.3-53.4z'
              fill='#FFFFFF'
            />
          </svg>
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
