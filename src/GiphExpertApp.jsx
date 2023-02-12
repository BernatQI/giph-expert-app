import { useState } from "react";
import { GiphGrid, AddCategory } from "./components";

export const GiphExpertApp = () => {

  const [categories, setCategories] = useState(['Dev']);

  const addCategory = newCategory => {
    if(!categories.includes( newCategory )) {
      setCategories([newCategory, ...categories]);
    }
  }

  return(
    <>
      <h1>Giphs App</h1>
      <AddCategory 
      onNewCategory={value => addCategory(value)} />
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