import { useState } from "react";


const AddAnimal = ({onNewClassAnimal}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
        console.log(target.value);
    }

    const addAnimalInput = (event) => {
        event.preventDefault(); //evitar un refresh del navegador con el formulario

        //validar que el input no este vacio
        if(inputValue.trim().length < 1) return;

        // setClassAnimal(classAnimal => [inputValue, ...classAnimal]); //agrega elementos al arreglo classAnimal al inicio
        // setClassAnimal(classAnimal => [...classAnimal, inputValue]); //agrega elementos al arreglo classAnimal al final
        onNewClassAnimal(inputValue.trim());
        console.log(inputValue); 
        setInputValue('');
    }

  return (
    <div>
        <form onSubmit={event => addAnimalInput(event)}>
            <input type="text" placeholder="Añadir animal" value={inputValue} onChange={onInputChange }/>
            <button onClick={event => addAnimalInput(event)}>Agregar</button>
        </form>
    </div>
  )
}

export default AddAnimal;