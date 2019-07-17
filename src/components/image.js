import React from 'react'

export default function Active(props) {

    console.log(props.image);
    if(props.image.length === 0){
        return null;
    }else{
          return (
        <React.Fragment>
        {  
    props.image.map(image =>(
       <div className = "carousel-item ">
        <img className = "d-block " src = {image.urls.thumb} alt = {image.alt_description}/>
        <div className = "carousel-caption d-none d-md-block">
        {image.user.first_name?<h5><span>Credit to </span> {image.user.first_name}</h5>:null}
        {image.user.location?<p>From {image.user.location}</p>:null} 
        </div>
        </div>

    ))
    }
 
        </React.Fragment>
    )
    }
  
    
}
