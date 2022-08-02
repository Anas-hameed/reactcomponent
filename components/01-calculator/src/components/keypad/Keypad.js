import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Keypad.css';

export class Keypad extends Component {

    render() {
        return (
            <div className={`keypad-container theme-${this.props.theme}-keypad`}>
                <button className={`key primary theme-${this.props.theme}-primary`} onClick={this.props.handleDigitClick}>7</button>
                <button className={`key primary theme-${this.props.theme}-primary`} onClick={this.props.handleDigitClick}>8</button>
                <button className={`key primary theme-${this.props.theme}-primary`} onClick={this.props.handleDigitClick}>9</button>
                <button className={`key secondary theme-${this.props.theme}-secondary`} onClick={this.props.handleDeleteClick}>DEL</button>
                <button className={`key primary theme-${this.props.theme}-primary`} onClick={this.props.handleDigitClick}>4</button>
                <button className={`key primary theme-${this.props.theme}-primary`} onClick={this.props.handleDigitClick}>5</button>
                <button className={`key primary theme-${this.props.theme}-primary`} onClick={this.props.handleDigitClick}>6</button>
                <button className={`key primary theme-${this.props.theme}-primary`} onClick={this.props.handleOperatorClick}>+</button>
                <button className={`key primary theme-${this.props.theme}-primary`} onClick={this.props.handleDigitClick}>1</button>
                <button className={`key primary theme-${this.props.theme}-primary`} onClick={this.props.handleDigitClick}>2</button>
                <button className={`key primary theme-${this.props.theme}-primary`} onClick={this.props.handleDigitClick}>3</button>
                <button className={`key primary theme-${this.props.theme}-primary`} onClick={this.props.handleOperatorClick}>-</button>
                <button className={`key primary theme-${this.props.theme}-primary`} onClick={this.props.handleDigitClick}>.</button>
                <button className={`key primary theme-${this.props.theme}-primary`} onClick={this.props.handleDigitClick}>0</button>
                <button className={`key primary theme-${this.props.theme}-primary`} onClick={this.props.handleOperatorClick}>/</button>
                <button className={`key primary theme-${this.props.theme}-primary`} onClick={this.props.handleOperatorClick}>x</button>
                <button className={`key secondary theme-${this.props.theme}-secondary reset`} onClick={this.props.handleResetClick}>RESET</button>
                <button className={`key equal theme-${this.props.theme}-equal`} onClick={this.props.handleEqualClick}>=</button>
            </div>
        );
    }
}

Keypad.propTypes = {
    handleDigitClick: PropTypes.func.isRequired,
    handleDeleteClick: PropTypes.func.isRequired,
    handleOperatorClick: PropTypes.func.isRequired,
    handleResetClick: PropTypes.func.isRequired,
    handleEqualClick: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired
};

export default Keypad
