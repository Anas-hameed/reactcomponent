import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Screen.css';

class Screen extends Component {
    render() {
        let res = "";
        if (this.props.operator === "" && this.props.number !== "") {
            res = this.props.number;
        }
        else if (this.props.prevNumber !== "" && this.props.operator !== "" && this.props.number !== "") {
            res = this.props.prevNumber + " " + this.props.operator + " " + this.props.number;
        }
        else if (this.props.prevNumber !== "" && this.props.operator !== "") {
            res = this.props.prevNumber + " " + this.props.operator;
        }
        else if (this.props.prevNumber !== "") {
            res = this.props.prevNumber;
        }
        return (
            <div className={`screen-container theme-${this.props.theme}-screen`} >
                <p className='screen-result'>{res}</p>
                <p className="screen-text">{this.props.display}</p>
            </div>
        );
    }
}

Screen.propTypes = {
    display: PropTypes.string.isRequired,
    theme: PropTypes.string.isRequired,
    operator: PropTypes.string.isRequired,
};

export default Screen;