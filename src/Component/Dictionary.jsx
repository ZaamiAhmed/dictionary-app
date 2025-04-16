import React,{useState} from "react";

import './dictionary.css';

export default function Dictionary() {
 let [keyword,setKeword]=useState("");

    function search(event) {
        event.preventDefault();
        alert(`searching for ${keyword}`);
        
    }
    function handleSubmit(event) {
      setKeword(event.target.value);
        
    }

    return(

        <div className="dictionary">
            <form onSubmit={search} >
                <input type="search" autoFocus={true} onChange={handleSubmit}/>
            </form>
        </div>
    );
    
}