import { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    const placeholder = 'https://imgs.search.brave.com/dkM181ozoajcofjm-WIE6mMcTwdnWe02-bDsKolKzag/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/NC8wOS8xMi80NS9l/cnJvci0yMjE1NzAy/XzY0MC5wbmc';
    const imgSrc = imageUrl || placeholder;
    const handleImgError = (e) => {
      if (e.target.src !== placeholder) {
        console.error('Image failed to load, replacing with placeholder:', imageUrl);
        e.target.src = placeholder;
      }
    };

    return (
      <div className='my-2'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgSrc} onError={handleImgError} className="card-img-top" alt={title || 'news'} />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem