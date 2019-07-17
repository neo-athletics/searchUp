import React from 'react';

export default function Image(props) {


if( props.image.length === 0){

        return (
            <h2>No results found</h2>
        )
}else{
    
        var first = props.image.shift();
 
        return (
            <div className = "active carousel-item  ">
            <img className = "d-block "  src = {first.urls.thumb} alt = {first.alt_description}/>
            <div className = "carousel-caption d-none d-md-block">
            {first.user.first_name?<h5><span>Credit to </span> {first.user.first_name}</h5>:null}
         {first.user.location?<p>From {first.user.location}</p>:null}   
            </div>
            </div>
        )
}
        
}