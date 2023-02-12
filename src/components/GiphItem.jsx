export const GiphItem = ({title, url}) => {

  const hasTitle = () => {
    if(title === '') {
      return title = 'No title';
    }else {
      return title;
    }
  }

    return(
      <div className="card">
            <img className="giph-img" src={url} alt={title} />
          <h3>{`Title: ${hasTitle()}`}</h3>
        </div>
    )
}
