// import react from "react";
import Meaning from "./Meaning";
import './results.css';
export default function Results(props) {
    // console.log(props.result);
    if (props.result) {   
         return( <div className="results">
             <h2>{props.result.word}</h2>
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