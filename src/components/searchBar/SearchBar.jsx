import { HiSearch } from "react-icons/hi";
import css from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
    
  };

  return (
    <div className={css.wrapper}>
      <HiSearch className={css.icon} />
      <form onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="search"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
