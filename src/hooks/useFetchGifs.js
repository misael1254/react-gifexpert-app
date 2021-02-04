import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category)=>{
    const [state, setstate] = useState({
        data:[],
        loading:true
    });

    // const [images, setImages] = useState([]);
    useEffect(() => {
        getGifs(category).then(imgs => setstate({
            data:imgs,
            loading:false
        }));
        // getGifs(category).then(imgs => setImages(imgs));
    }, [category]) 
    // el use effect se compone de una función que voy a ejecutar,  y de las dependencias
    // al mandar un array vacío, quiere decir que sólo se ejecutará una vez


    return state;//{data:[],loading:true}

}