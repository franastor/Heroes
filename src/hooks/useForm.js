import { useState } from "react";

export const useForm = (initialForm = {}) =>{
    const [formState, setFormState] = useState(initialForm);

    

    const onInputChange = (event) => {

        const { name, value } = event.target;


        setFormState({
            ...formState,
            [name]: value //con [ name ] le digo que el cambie el valor que coincida con el name

        })

    }
    const reset = () => {
        setFormState(initialForm);
       
       
    }


    return {
        ...formState, //haciendo eso ya enviamos desestructurado todo
        formState,
        onInputChange,
        reset

    }

}