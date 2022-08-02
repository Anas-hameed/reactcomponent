import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <h1 className="calc-logo">calc</h1>
                <section className="theme-toggle">
                    <p className="theme-text">THEME</p>
                    <div className="theme-toggle-container">
                        <div className="toggle-container">
                            <p>1</p>
                            <button
                                className="toggle-btn theme-one-active-toggle"
                                data-theme="one"
                                onClick={this.props.handleThemeToggleClick}>
                                <span className="hidden">Toggle</span>
                            </button>
                        </div>
                        <div className="toggle-container">
                            <p>2</p>
                            <button
                                className="toggle-btn theme-two-active-toggle"
                                data-theme="two"
                                onClick={this.props.handleThemeToggleClick}>
                                <span className="hidden">Toggle</span>
                            </button>
                        </div>
                        <div className="toggle-container">
                            <p>3</p>
                            <button
                                className="toggle-btn theme-three-active-toggle"
                                data-theme="three"
                                onClick={this.props.handleThemeToggleClick}>
                                    <span className="hidden">Toggle</span>
                            </button>
                        </div>
                    </div>
                </section>
            </header>
        );
    }
}

Header.propTypes = {
    theme: PropTypes.string.isRequired,
    handleThemeToggleClick: PropTypes.func.isRequired
}

export default Header
