import { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {

  static defaultProps = {
    country: 'us',
    pageSize: 8,
    category: 'general',
    totalResults: 0,
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsDonkey`;
  }

  async UpdateNews(pageArg) {
    this.props.setProgress(10);
    const page = pageArg || this.state.page || 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eee52a7a28e4497b96509996b48fcd7a&page=${page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    this.props.setProgress(50);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.UpdateNews();
  }

  fetchMoreData = async (pageArg) => {
    this.setState({ page: this.state.page + 1 })
    const page = pageArg || this.state.page || 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=eee52a7a28e4497b96509996b48fcd7a&page=${page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className='text-center' style={{ margin: '40px' }}>NewsDonkey - Top Headlines of {this.capitalizeFirstLetter(this.props.category)}</h1>
        {/* {this.state.loading && <Spinner/>} */}

        <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults} loader={<Spinner />}>
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 60) : ''} date={element.publishedAt}
                    description={element.description ? element.description.slice(0, 95) : ''}
                    newsUrl={element.url} imageUrl={element.urlToImage} author={element.author}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
      </div>
    )
  }
}

export default News