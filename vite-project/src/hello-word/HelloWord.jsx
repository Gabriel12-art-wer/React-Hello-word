import React, { useState } from "react";

export default function HelloWorld(){

    let mensage = ''
    let [name, setName] = useState('');
    let [mensage, setMessage] = useState('');

    const handleHelloWorld = () => setMessage(`Hello word, ${name}`)

    const handleClear = (event) => {
        setMessage('');
        setName('');
        
    }

    const handleChangeInput = (event) =>{
        setName(event.target.value)
        console.log('name: ', name )
    }

    const handleKeyInput = (event) =>{
        console.log(event)
        if(event.key === 'Escape'){
        setName('');
        mensage = ''
        }
        if(event.key === 'Enter'){

        }
    }

    return(
      <section>
      <h1>Hello World</h1>
      <input type="text" onChange={handleChangeInput} value={name}/>
      <button onClick={handleHelloWorld}>Hello World</button>
      <button onClick={handleClear}>Limpar</button>
      {name ? <p>Hello World, {name}!</p>: undefined}
      {mensage && <p>{mensage}</p>}
      </section>


    )

}
