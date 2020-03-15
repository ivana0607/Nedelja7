import React from 'react';

// const Description = (props) => {
//     return (
//         <h1> {props.text}</h1 >
//     )
// }

class Description extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <h1> {this.props.text}</h1 >
        )
    }
}

export default Description;