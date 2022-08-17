import './App.css';
import pc from './images/pc.jpg'
import ipod from './images/ipod.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import List from './Components/List';

export default class App extends Component {
  state = {
    articles: [{ id: 0, name: 'pc', price: 55, qte: 0, img: pc },
    { id: 1, name: 'ipod', price: 20, qte: 0, img: ipod }], sum: 0
  }
  incrementQuantity = (id) => {
    this.setState({
      articles: this.state.articles.map((el) => {
        if (el.id === id) {
          return { ...el, qte: el.qte + 1 }
        }
        else {
          return el
        }
      })
    })
  }
  decrementQuantity = (id) => {
    this.setState({
      articles: this.state.articles.map((el) => {
        if (el.id === id && el.qte > 0) {
          return { ...el, qte: el.qte - 1 }
        }
        else {
          return el
        }
      })
    })
  }
  deleteItems = (article) => {
    this.setState({
      articles: this.state.articles.filter((el) => el.id !== article.id),
      sum: this.state.sum - article.qte * article.price,
    })
  }
  /*
  this.state.articles.map((el)=>{
    if(el.id!==id){
      return el.id
    }
  })
*/
  handleTotalIncrement = (article) => {
    this.setState({ sum: this.state.sum + article.price })
  }
  handleTotalDecrement = (article) => {
    if (this.state.sum > 0 && article.qte > 0)
      this.setState({ sum: this.state.sum - article.price })
  }

  render() {
    console.log(this.state)
    console.log(this.state.articles[0].name)

    return (
      <div className='App'>
        <List article={this.state.articles} sum={this.state.sum}
          incrementQuantity={this.incrementQuantity}
          decrementQuantity={this.decrementQuantity}
          deleteItems={this.deleteItems}
          handleTotalIncrement={this.handleTotalIncrement}
          handleTotalDecrement={this.handleTotalDecrement} />
      </div>
    )
  }
}

