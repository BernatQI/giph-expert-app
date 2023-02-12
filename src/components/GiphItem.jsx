import PropTypes from 'prop-types';

export const GiphItem = ({title, url}) => {

    return(
      <div className="card">
            <img className="giph-img" src={url} alt={title} />
          <h3>{`Title: ${title === '' ? 'No Title' : title}`}</h3>
        </div>
    )
}

GiphItem.propTypes = {
  title : PropTypes.string.isRequired,
  url   : PropTypes.string.isRequired
}