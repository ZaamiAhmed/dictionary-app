import React,{useState} from "react";
import axios from "axios";
import './dictionary.css';
import Results from "./Results";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Photos from "./Photos";

export default function Dictionary() {
 let [keyword,setKeword] = useState("");
 let [results,setResults] = useState(null);
 let [photos,setPhotos]=useState(null);

    function handleChange(event) {
      setKeword(event.target.value);
        
    }
     function handleDictionaryResponse(response) {
    //  console.log(response.data);
     setResults(response.data[0]);
 }

function handleShecodesResponse(response) {
  setPhotos(response.data.photos);
  
}
    function handleSubmit(event) {
        event.preventDefault();
   
let api=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

  axios.get(api).then(handleDictionaryResponse);

  let shecodesapikey="3b95otea77f9a4894d538e9bd2a44800";
 let shecodesapiurl=`https://api.shecodes.io/images/v1/search?query=${keyword}&key=${shecodesapikey}&per_page=4`;
    axios.get(shecodesapiurl).then(handleShecodesResponse)
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
        <Photos photos={photos}/>
      </>
    );
     
    
}