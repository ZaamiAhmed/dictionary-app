import React,{useState} from "react";
import axios from "axios";
import './dictionary.css';

export default function Dictionary() {
 let [keyword,setKeword] = useState("");

    function handleChange(event) {
      setKeword(event.target.value);
        
    }
     function handleResponse(response) {
     console.log(response.data);
     
 }
    function handleSubmit(event) {
        event.preventDefault();
let api=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

        axios.get(api).then(handleResponse);

        
    }


 

    return(

        <div className="dictionary">
            <form onSubmit={handleSubmit} >
                <input type="search" autoFocus={true} onChange={handleChange}/>
            </form>
        </div>
    );
    
}