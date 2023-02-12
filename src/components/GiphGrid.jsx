import { useFetchGifs } from "../hooks/useFetchGifs";
import { GiphItem } from "./GiphItem";

export const GiphGrid = ({category}) => {

  const {images, isLoading} = useFetchGifs(category)

  return(
    <>
      <h2 className="GiphGrid-title">{category}</h2>
      {
        isLoading && (<p>Loading...</p>)
      }
      <article className="card-grid">
      {images.map(({id, title, url}) => (
        <GiphItem
          key={id}
          title={title}
          url={url} />
    ))}
      </article>
    </>
  )
}