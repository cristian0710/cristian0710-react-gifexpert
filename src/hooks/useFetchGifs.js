import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (animals) => {

    console.log('esto es un Fetch: ', animals);

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
      const newImages = await getGifs(animals);
      setImages(newImages);
      setIsLoading(false);
    }

    useEffect( () => {
      getImages();
    }, []);

    return {
        images: images,
        isLoading: isLoading
    }
}
