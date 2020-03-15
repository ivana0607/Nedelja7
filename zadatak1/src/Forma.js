import React from 'react';
import './button.css';

const Forma = (props) => {
    return (
        <>
            <input type='text'></input>
            <button className='button'>{props.text}</button>
        </>
    )
}

// class Forma extends React.Component {
//     constructor(props) {
//         super(props)
//     }
//     render() {
//         return (
//             <>
//                 <input></input>
//                 <button className='button'>{this.props.text}</button>
//             </>
//         )
//     }
// }


export default Forma;