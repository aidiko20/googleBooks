import React from "react";
import "./style.css";
 function Search() {
    return (
    <div 
        className="form-group mx-sm-3 mb-2">
        <label for="inputSearch2" class="sr-only">Search</label>
    <input type="text" class="form-control" id="inputSearch2" placeholder="Search" />
            <input type="text"  className="form-control-plaintext" id="staticSearch2"/>
                <button type="search" class="btn btn-primary mb-2" id="searchBtn">Search</button>
        </div>
            );
            }
    export default Search;
