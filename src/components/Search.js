
import React, { useEffect, useState } from "react";
import style from "./css/Search.module.css"




const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    
    setSearchValue(e.target.value);
    e.preventDefault();
    
  }
  useEffect(() => {
    props.search(searchValue);
  },[searchValue])
 /*  const resetInputField = () => {
    setSearchValue("")
  }
   const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
  } */ 
  
  return (
      <form className={style.form}>
        
        <input
          className={style.search}
          placeholder="Search for Album..."
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
      </form>
    );
}

export default Search;




