import { useState } from "react";
import AddCategory from "./components/AddCategory";

export const GifEXpertApp = () => {
  const [categories, setCategories] = useState(["naruto", "one piece"]);

  const onAddCategory = () => {
    setCategories(["NUEVA", ...categories]);
  };

  return (
    <div>
      <div>gif expert app</div>

      <AddCategory setCategories={setCategories} />

      {/* <button onClick={onAddCategory}>Agregar</button> */}

      <ol>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </div>
  );
};
