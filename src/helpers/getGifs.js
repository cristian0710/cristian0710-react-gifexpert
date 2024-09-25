
export const getGifs = async(animals) => {
    console.log('entro: ', animals);
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=nGZla8ZKtQ2adBNYsJpFZfXEfzYZpYWJ&q=${animals}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
  
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
      type: img.type
    }))
  
    console.log(gifs);
    
    return gifs;
  }