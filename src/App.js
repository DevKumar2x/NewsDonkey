import './App.css';
import Navbar from './components/Navbar'
import { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={9}/>
      </div>
    )
  }
}

