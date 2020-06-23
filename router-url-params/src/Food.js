import React, {Component} from 'react'

class Food extends Component {
    render() {
        const name = this.props.match.params.name;
        const url=`https://source.unsplash.com/1600x900/?${name}`
        return (
            <div className="Food">
                <h1>I love to each {name}</h1>
                <img src={url} alt={name}/>
            </div>
        )
    }
}
export default Food
