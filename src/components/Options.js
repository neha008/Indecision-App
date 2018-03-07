import React from 'react';
import Option from './Option'

//stateless-functional-component
const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title" >Your options</h3>
            <button
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove All
         </button>
        </div>
        {props.options.length === 0 && <p className="widget__message" >please add an option</p>}
        {
            props.options.map((option,index) => (
                <Option
                    key={option}
                    optionText={option}
                    count={index+1}
                    handleDeleteOption={props.handleDeleteOption} />)
            )
        }

    </div>
)

export default Options;
//class based component

// class Options extends React.Component {
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {
//                     this.props.options.map((option) => <Option key={option} optionText={option} />)
//                 }

//             </div>
//         )
//     }
// }
