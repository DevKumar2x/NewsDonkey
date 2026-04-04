import { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    }
  }

  async componentDidMount(){
      // API call to fetch news articles
      let url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eee52a7a28e4497b96509996b48fcd7a&page=1&pageSize=13';
      let data = await fetch(url);
      let parsedData = await data.json()
      this.setState({articles: parsedData.articles});
  }

  handleNextClick = async() => {

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eee52a7a28e4497b96509996b48fcd7a&page=${this.state.page + 1}&pageSize=13`;
    let data = await fetch(url);
    let parsedData = await data.json()

    this.setState({
      page : this.state.page + 1,
      articles: parsedData.articles
    })
  }

  handlePrevClick = async() => {

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eee52a7a28e4497b96509996b48fcd7a&page=${this.state.page - 1}&pageSize=13`;
    let data = await fetch(url);
    let parsedData = await data.json()

    this.setState({
      page : this.state.page - 1,
      articles: parsedData.articles
    })
  }

  render() {
    return (
      <div className="container">
        <h1>News-Donkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title?element.title.slice(0, 60):''}
                  description={element.description?element.description.slice(0, 95):''}
                  newsUrl={element.url} imageUrl={element.urlToImage}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePrevClick} >&larr; Previous</button>
          <button disabled={this.state.page>=3} type="button" class="btn btn-dark" onClick={this.handleNextClick} >Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News