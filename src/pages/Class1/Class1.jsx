import React, {useState } from 'react'

export const Class1 = () => {
  
  const [username, setUsername] = useState("bienvenido usuario")

  const [Text, setText] = useState('')

  const handleGreet = () =>{
    
    setUsername('bienvenido '+Text)
  }

  return (
    <main className=''>
    <h1>{username} </h1>
      <input 
      value={Text}
      onChange={(e)=> setText(e.target.value)}
      placeholder='Ingrese su nombre'/>

      <button onClick={handleGreet}> 
        Saludos {Text}
      </button>
    </main>

  )
}
