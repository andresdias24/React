import { useState } from "react"
import AddCategory from "./components/AddCategory"
export const GifEXpertApp = () => {

    const [categories, setCategories] = useState(["naruto", "one piece"])

    const onAddCategory = () => {
        setCategories(["goku", ...categories])
    }

  return (
    <>
        <div>gif expert app</div>

        <AddCategory/>

        <button onClick={onAddCategory}>agregar</button>
        <ol>
            {categories.map(category=>{
                return <li key={category}>{category}</li>
            })}
        </ol>

    </>

  )
}
