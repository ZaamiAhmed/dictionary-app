import './photos.css';
export default function Photos(props){
    if (props.photos) {
        // console.log(photo)
        return(
          
            <section className="photos">
                  <div className="row">
               
           {props.photos.map(function(photo,index) {
                //  console.log(photo);
                
               return (
               <div className="col-sm-6 col-md-4" key={index}>
                   <a href={photo.src.original} target="_blank" rel="noreferrer">
                       
               <img src={photo.src.landscape} alt={photo.alt}  className="img-fluid" />
               
               </a>
                </div>
               );
           })}
           </div>
           
       </section>
      
        );
        
    }else{
        return null;
    }
 

}