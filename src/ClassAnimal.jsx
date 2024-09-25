import { useState } from "react";
import AddAnimal from "./components/AddAnimal";
import GifGrid from "./components/GifGrid";


const ClassAnimal = () => {

    const[classAnimal, setClassAnimal] = useState(['goku']);

    const onAddClassAnimal = (newClass) =>{

        if(classAnimal.includes(newClass)) return  //valida que el nuevo elemento no exista dentro del array

        // setClassAnimal([newClass, ...classAnimal]);
        setClassAnimal([...classAnimal, newClass]);
        console.log(newClass);
    }

  return (
    <>
        <h1>CLASES DE ANIMALES</h1>
        <AddAnimal 
            // setClassAnimal={setClassAnimal}
            onNewClassAnimal={event => onAddClassAnimal(event)}
        />
        {
            classAnimal.map( (animals) => {
                // return <div key={animals}>{animals}</div>
                return <GifGrid key={animals} animals={animals}/>
            })
        }
    </>
  )
}

export default ClassAnimal;