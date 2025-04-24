import React,{useState} from "react";
import axios from "axios";
import './dictionary.css';
import Results from "./Results";
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Dictionary() {
 let [keyword,setKeword] = useState("");
 let [results,setResults] = useState(null);

    function handleChange(event) {
      setKeword(event.target.value);
        
    }
     function handleResponse(response) {
     console.log(response.data);
     setResults(response.data[0]);
 }
    function handleSubmit(event) {
        event.preventDefault();
   
let api=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

        axios.get(api).then(handleResponse);

        
    }
    return(
     <>
        <div className="dictionary">
            <h2>English Dictionary</h2>
           
            <form onSubmit={handleSubmit} >
                 <section className="search-container">
                <input type="search" placeholder="type a word" autoFocus={true}  onChange={handleChange} />
                <i className="fa-solid fa-magnifying-glass"onClick={handleSubmit} ></i>
               
                 </section>
            </form>
            {/* <span>i.e book,club,rope.</span> */}
          
        </div>
        <Results result= {results}/>
      </>
    );
     
    
}