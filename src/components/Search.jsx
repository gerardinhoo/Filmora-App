import React from 'react';

const Search = ({searchTerm, setSearchTerm}) => {

   const onclickSearch = (e) => {
      setSearchTerm(e.target.value)
   }
   
  return (
    <div className='search'>
      <div>
         <img src='search.svg' alt='search' />

         <input
           type='text'
           placeholder='Search Through Toushands Of Movies'
           value={searchTerm}
           onChange={onclickSearch}
         />
      </div>
      
    </div>
  )
}

export default Search;
