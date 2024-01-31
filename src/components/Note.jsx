import React from "react";
import './Note.css'

export default class Note extends React.Component {

    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            inputValue: ''
        };
    }

    handleInputChange = (event) => {
        this.setState((prevState) => ({ inputValue: event.target.value }));
    }

    render() {
        return (
            <div className="editor-container">
                <div className="editor-input">
                    <h3>Input</h3>
                    <textarea className="input-text" onChange={this.handleInputChange} defaultValue={this.state.inputValue} />
                </div>
                <div className="editor-output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.inputValue}</div>
                </div>
            </div>
        )
    }
}
