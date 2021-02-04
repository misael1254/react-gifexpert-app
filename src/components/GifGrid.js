import React, { useEffect, useState } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import GrifGridItem from './GrifGridItem';

export const GifGrid = ({category = "One Punch"}) => {

    
    const {data:images,loading} = useFetchGifs(category);

    // const [images, setImages] = useState([]);
    // useEffect(() => {
    //     getGifs(category).then(imgs => setImages(imgs));
    // }, [category]) 
    // el use effect se compone de una función que voy a ejecutar,  y de las dependencias
    // al mandar un array vacío, quiere decir que sólo se ejecutará una vez

    
    // getGifs();
    return (
        <>
        <h3>{category}</h3>
        {/* {loading ? 'Cargando' : 'Data Cargada'} */}
        {loading && 'Cargando'}
        <div className="card-grid" >
            {images.map(imgObj=>{
                if(imgObj.id){
                    return <GrifGridItem key={imgObj.id} {...imgObj} />
                    // return <GrifGridItem key={imgObj.id} imageObj={imgObj} />
                }
            })}
        </div>
        </>
    )
}
