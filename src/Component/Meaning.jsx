import './meaning.css';
export default function Meaning(props) {
    console.log(props.meanings);
    return(
        <div className="meaning">
            <h3>{props.meanings.partOfSpeech}</h3>
          {props.meanings.definitions.map(function(definition,index) {
              return(
                  <div key={index}>
                      <p>
                      {definition.definition}
                      <em>{definition.example}</em>
                      </p>

                  </div>
              )
              
          })}
        </div>
    )
    
}