import React from 'react'

export default function Indicators(props) {
    if(props.images.length === 0){
        return null;
    }else{
        return (
       <>
            <ol className = "carousel-indicators">
                    <li data-target = "#carouselCaptions" data-slide-to = "0" className = "active"></li>                          
                    <li data-target = "#carouselCaptions" data-slide-to = "1"></li>
                    <li data-target = "#carouselCaptions" data-slide-to = "2"></li>
            </ol>
        </>
        )  
    }
  
}
