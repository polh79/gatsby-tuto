import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Table extends Component {

    state = {
        num: 1
    }

    changerValeur = (e) =>  {
        this.setState({ num: e.target.value })
    }

    render() {
        return(
            <div>
                <h1>Table de multiplication</h1>
                <h2>Choix :</h2>
                <input type='text' value={this.state.num} onChange={ this.changerValeur } />
                <ul>
                      <li>1 * { this.state.num } = { this.state.num * 1 }</li>
                      <li>2 * { this.state.num } = { this.state.num * 2 }</li>
                      <li>3 * { this.state.num } = { this.state.num * 3 }</li>
                      <li>4 * { this.state.num } = { this.state.num * 4 }</li>
                      <li>5 * { this.state.num } = { this.state.num * 5 }</li>
                      <li>6 * { this.state.num } = { this.state.num * 6 }</li>
                      <li>7 * { this.state.num } = { this.state.num * 7 }</li>
                      <li>8 * { this.state.num } = { this.state.num * 8 }</li>
                      <li>9 * { this.state.num } = { this.state.num * 9 }</li>
                      <li>10 * { this.state.num } = { this.state.num * 10 }</li>
                </ul>
            </div>  
        )
    }
}

export default Table