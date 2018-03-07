import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };


    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        }
        catch (e) {
            //do nothing
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);

        }
    }

    componentWillUnmount() {
        console.log('componentwillunmount');
    }


    handleClearSelectedOption = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))  //using arrow function shorthand property we can do this in one line
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option
            })
        }))
    }


    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        console.log(randomNum);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }))
    }
    handleAddOption = (option) => {
        if (!option) {
            return 'enter valid value'
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'this already exist'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }))
    }
    render() {
        const subtitle = "put your life in hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action hasOption={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                    <OptionModal
                        handleClearSelectedOption={this.handleClearSelectedOption}
                        selectedOption={this.state.selectedOption} />
                </div>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}
