import React from 'react';

// const Emoji = (props) => {
//     return (
//         <img src={props.url} alt='Emoji'></img>

//     )
// }

class Emoji extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <img src={this.props.url} alt='Emoji'></img>
        )
    }
}

export default Emoji;