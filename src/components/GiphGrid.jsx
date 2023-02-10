import { useEffect } from "react";
import { getGiphs } from "../helpers/getGiphs";

export const GiphGrid = ({category}) => {

  useEffect(() => {
    getGiphs(category);
  }, [])

  return(
    <article>
      <h3 className="GiphGrid-title">{category}</h3>
    </article>
  )
}