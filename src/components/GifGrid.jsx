import { useEffect, useState } from "react";
// import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


const GifGrid = ({ animals }) => {

    console.log('esto es un GifGrid: ', animals);

    // const [images, setImages] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);


    // const getImages = async() => {
    //   const newImages = await getGifs(animals);
    //   setImages(newImages);
    //   setIsLoading(false);
    // }

    // useEffect( () => {
    //   getImages();
    // }, []);

    const {images, isLoading} = useFetchGifs(animals);

    console.log({images, isLoading});
    


  return (
    <>
        <h3>{animals}</h3>

        {
          // isLoading ? (<h4 >Cargando...</h4>) : null     //Esto es un if corto
          isLoading && (<h4 >Cargando...</h4>)              //Esto tambien es un if solo con la condicion verdadera 
        }

        {/* <ol>
          {
            // images.map((img) => {
            //   return <li key={img.id}>{img.title}</li>
            // })
            //Utilizar desestructuración
            // images.map(({id, title}) => {
            //   return <li key={id}>{title}</li>
            // })
            images.map(({id, title}) => {
              return <GifItem key={id}/>
            })
          }
        </ol> */}
        <div className="card-grid">
          {
            images.map((img) => {
              // return <GifItem key={img.id} title={img.title} url={img.url}/>
              return <GifItem key={img.id} {...img}/> //se envian todas las propiedades del objeto ejem: id, title, url... etc
            })
          }
        </div>
    </>
  )
}

export default GifGrid;