import React, { useState } from 'react'

export default function AddCategory() {
    const [inputValue, setinputValue] = useState("one")
  return (
    <input type='text' placeholder='buscar gift'></input>
  )
}
