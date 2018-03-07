import React from 'react';

//this way of exporting a file is ok but this does not provide any name so better use the second one

// export default  (props) => {                                                              
//     return (
//         <div>
//             {props.optionText}
//             <button

//                 onClick={(e) => {
//                     props.handleDeleteOption(props.optionText);
//                 }}
//             //onClick={props.handleDeleteOption.bind(this,props.optionText)}
//             >
//                 remove
//             </button>
//         </div>
//     )

// }

const Option = (props) => {

    return (
        <div className="option" >
        <p className="option__text" >{props.count}. {props.optionText}</p>
           
            <button
                className="button button--link"
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            //onClick={props.handleDeleteOption.bind(this,props.optionText)}
            >
                remove
            </button>
        </div>
    )

}

export default Option;

//class based component

// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }
// }