import './synonyme.css'
export default function Synonyms(props) {
    if (props.synonyms) {
        return <ul>
            <section className="synonyme-section">
            {props.synonyms.map(function (synonym,index) {
              
                return(
                  <li key={index}>
                   {synonym}
                </li>
                );
               
                
            })}
            </section>
        </ul>;
        
    }else{
        return null;
    }
    
}