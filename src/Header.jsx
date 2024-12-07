import { useState } from "react";

const Header = ({ setCity }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = event => {
    event.preventDefault();
    setCity(searchQuery);
  };

  return (
    <nav>
      <div>
        <div>
          <div>
            <img src='weather-svgrepo-com.svg' alt='logo' />
          </div>
          <span>WeatherNow</span>
        </div>
        <form onSubmit={handleSearch}>
          <input
            type='text'
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            placeholder='Search...'
          />
          <button type='submit'>Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
