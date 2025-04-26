 import './phonetic.css';
 export default function Phonetic(props) {
    //  console.log(props.phonetic);
     return(
         <div className="phonetic">
              <span className="phonetic-text">{props.phonetic.text}</span>
             <section className="phonetic-container">
             <a href={props.phonetic.audio} target="_blank" rel="noreferrer" ><i className="fa-solid fa-volume-high"></i></a>
             </section>
         <br />
    
             
         </div>
     );
 }