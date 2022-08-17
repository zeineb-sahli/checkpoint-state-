import React, { Component } from 'react'
import SingleItem from './SingleItem'

class List extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }
    render() {

        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {this.props.article.map((el) => <SingleItem key={el.id} article={el}
                        incrementQuantity={this.props.incrementQuantity}
                        decrementQuantity={this.props.decrementQuantity}
                        deleteItems={this.props.deleteItems}
                        handleTotalIncrement={this.props.handleTotalIncrement}
                        handleTotalDecrement={this.props.handleTotalDecrement} />

                    )}
                </div>

                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <h1>total sum:</h1>
                    <h1>{this.props.sum}</h1>
                    <h1>$</h1>
                </div>
            </div>
        )
    }
}
export default List