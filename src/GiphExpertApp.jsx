import { AddCategory } from "./components/AddCategory";
import { useState } from "react";

export const GiphExpertApp = () => {

  const [categories, setCategories] = useState(['SEO', 'Dev']);

  const addCategory = (newCategory) => {
    console.log("🚀 ~ file: GiphExpertApp.jsx:9 ~ addCategory ~ newCategory", newCategory)
    setCategories([...categories, newCategory]);
  }

  return(
    <>
      <h1>Giphs App</h1>
      <AddCategory 
      //setCategories={setCategories}
      onNewCategory={addCategory} />
      <button onClick={addCategory}>Add Category</button>
      <ol>
        {categories.map(category => <li key={category}>{category}</li>)}
      </ol>
    </>
  )
}