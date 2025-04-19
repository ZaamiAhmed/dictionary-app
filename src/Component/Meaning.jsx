import './meaning.css';
import Synonyms from './Synonyms';
export default function Meaning(props) {
    // console.log(props.meanings);
    
    return(
        <div className="meaning">
            <h3>{props.meanings.partOfSpeech}</h3>
             
          {props.meanings.definitions.map(function(definition,index) {
              return(
                  
                  <div key={index}>
                      <p>
                      {definition.definition}
                         </p>
                      <em>{definition.example}</em>
                      <br />
                      <Synonyms synonyms={definition.synonyms}/>
                    
                  </div>
                  
              )
              
          })}
        </div>
    )
    
}