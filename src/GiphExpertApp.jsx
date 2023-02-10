import { AddCategory } from "./components/AddCategory";
import { useState } from "react";
import { GiphGrid } from "./components/GiphGrid";

export const GiphExpertApp = () => {

  const [categories, setCategories] = useState(['Dev']);

  const addCategory = (newCategory) => {
    if(!categories.includes( newCategory )) {
      setCategories([newCategory, ...categories]);
    }
  }

  return(
    <>
      <h1>Giphs App</h1>
      <AddCategory 
      onNewCategory={addCategory} />
        {
          categories.map(category => (
              <GiphGrid 
                key={category}
                category={category} />
            ))
        }
    </>
  )
}