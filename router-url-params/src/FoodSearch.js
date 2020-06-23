import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class FoodSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {query: ''}
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(evt) {
        this.setState({query: evt.target.value})
    }
    render() {
        return (
            <div>
                <h1>Search</h1>
                <input type="text" value={this.state.query} onChange={this.handleChange}/>
                <Link to={`/food/${this.state.query}`}>Go</Link>
            </div>
        )
    }
}
export default FoodSearch
