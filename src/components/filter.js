import React from 'react';
import {FaSearch} from 'react-icons/fa';
const Search =(props)=>{
    return(
       <div className="search-bar">
                <h4>Movies-Kids</h4>
                <FaSearch className="loop"/> 
                <input type="text"  placeholder="tape a name" onChange={(e)=>{props.searchT(e.target.value)} }/>
                <input type="number" placeholder="tape a rate" onChange={(e)=>{props.searchR(e.target.value)}}/> 
                </div>
        
    )
}
export default Search;