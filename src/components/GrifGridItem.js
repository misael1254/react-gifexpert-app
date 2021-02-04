import React from 'react'

export default function GrifGridItem(/*{imageObj}*/ { id, imgURL }) {
    return (
        
        // <div key={imageObj.id} className="divImages">
        // <img src={imageObj.imgURL.url} alt={imageObj.id}/>
        // </div>
        
        <div key={id} className="divImages card animate__animated animate__fadeInDown">
        <img src={imgURL.url} alt={id}/>
        </div>
            
        
    )
}
