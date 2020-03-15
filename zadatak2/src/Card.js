import React from 'react';
import Emoji from './Emoji';
import Description from './Description';

// const Card = ({ url, text }) => {
//     return (
//         <>
//             <Description text={text} />
//             <Emoji url={url} />
//         </>
//     )
// }

class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <Description text={this.props.text} />
                <Emoji url={this.props.url} />
            </>
        )
    }
}


export default Card;