import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class SingleItem extends Component {
    constructor(props) {
        super(props)
        console.log(this.props)

    }
    handleIncrement = () => {
        this.props.incrementQuantity(this.props.article.id)
        this.props.handleTotalIncrement(this.props.article)
        /*alert(this.props.article.id)*/
    }
    handleDecrement = () => {
        this.props.decrementQuantity(this.props.article.id)
        this.props.handleTotalDecrement(this.props.article)
    }
    handleDelete = () => {
        this.props.deleteItems(this.props.article)

    }

    render() {

        return (
            <div >
                <Card style={{ width: '30rem', marginRight: 100 }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div>
                            <Card.Img style={{ width: 320 }} variant="top" src={this.props.article.img} />
                            <Card.Body>
                                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                    <Card.Title>{this.props.article.name}</Card.Title>
                                    <Card.Title>{this.props.article.price}$</Card.Title>
                                    <Button variant="primary" onClick={this.handleDelete}>Delete</Button>
                                </div>

                            </Card.Body>
                        </div>

                        <div style={{ marginLeft: 20 }}>
                            <Button variant="success" onClick={this.handleIncrement}>+</Button>
                            <span style={{ marginLeft: 10, marginRight: 10 }}><b>{this.props.article.qte}</b></span>
                            <Button variant="danger" onClick={this.handleDecrement}>-</Button>
                        </div>
                    </div>

                </Card>

            </div>
        )
    }
}
export default SingleItem

