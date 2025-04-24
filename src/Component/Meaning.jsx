import './meaning.css';
import Synonyms from './Synonyms';
export default function Meaning(props) {
    // console.log(props.meanings);
    
    return(
        <div className="meaning">
            <h3 className="part-speech">{props.meanings.partOfSpeech}</h3>
              
          {props.meanings.definitions.map(function(definition,index) {
              return(
                
                  <div key={index}>
                   <div className="definition">
                       {definition.definition}

                   </div>
                      
                      <div className="example">{definition.example}</div>
                     
                      
                      <Synonyms synonyms={definition.synonyms}/>
                    
                  </div>
           
              )
               
          })}
           
          <Synonyms synonyms={props.meanings.synonyms}/>
        </div>
    )
    
}