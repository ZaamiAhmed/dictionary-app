 export default function (props) {
    //  console.log(props.phonetic);
     return(
         <div className="phonetic">
             <a href={props.phonetic.audio} target="_blank">Audio</a>
         <br />
             {props.phonetic.text}
         </div>
     );
 }