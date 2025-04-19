// import react from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import './results.css';
export default function Results(props) {
    // console.log(props.result);
    if (props.result) {   
         return( <div className="results">
             <h2>{props.result.word}</h2>
             {props.result.phonetics.map(function(phonetic,index) {
                 return(
                     <div key={index}>
                     <Phonetic phonetic={phonetic}/>
                     </div>
                 );
                 
             })
}
             {props.result.meanings.map(function(meaning,index) {
              return   (<div key={index}>
             <Meaning meanings={meaning}/>
             </div>)
             })}
         </div> );
    } 
    else{
        return null;
    }
   
   
    
}