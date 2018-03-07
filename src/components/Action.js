import React from 'react';

//stateless-functional-component

const Action = (props) => (
    <div>
        <button className="big-button"
            onClick={props.handlePick}
            disabled={!props.hasOption}
        >
            What should I do?
        </button>
    </div>
)

export default Action;

//class based component

// class Action extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button
//                     onClick={this.props.handlePick}
//                     disabled={!this.props.hasOption}
//                 >
//                     What should I do?
//                 </button>
//             </div>
//         )
//     }
// }