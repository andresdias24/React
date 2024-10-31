import { useState } from "react";

export default function AddCategory({ setCategories }) {
  const [inputValue, setInputValue] = useState("on push");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setCategories((categories) => [inputValue, ...categories]);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
}
