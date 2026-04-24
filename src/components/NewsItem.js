import { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl , author , date } = this.props;
    const fallbackImage = 'https://automatedelectronic.com/wp-content/uploads/2025/02/15-Coolest-Tech-Gadgets-2025-Available-On-Amazon.jpg';
    const imgSrc = (imageUrl && imageUrl !== 'null') ? imageUrl : fallbackImage;

    return (
      <div className='my-2'>
        <div className="card" style={{ width: "18rem" }}>
          <img src={imgSrc} className="card-img-top" alt={title || 'news'} onError={(e)=>{e.target.onerror=null; e.target.src=fallbackImage}} />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem