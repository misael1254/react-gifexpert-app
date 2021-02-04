export const getGifs= async(category = 'onePunch')=>{
    const apiKey = 'IUF5aM1djGu3bNyPeMKSxD363UQkfyFj';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
     try {
       const resp = await fetch(url);
       const {data} = await resp.json();
    //    console.log(data);
       const giph = data.map( element => {
            return {
                id: element.id,
                title: element.title,
                imgURL : element.images?.downsized //se puso el "?" para decir que si existe, lo incerte
            }
       });
       return giph;
    //   console.log(giph);
    } catch (error) {
        console.log(error)
        return [];
    }
}