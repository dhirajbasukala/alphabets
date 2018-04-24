import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class HeaderComponent extends Component {
  render() {
    const { languages } = this.props;
    return (
      <div className="header">
        <h1> Alphabets </h1>
        <nav>
          Select Language:
          <select
            ame="language"
            ref={input => {
              this.language = input;
            }}
            onChange={() => this.props.selectLanguage(this.language.value)}
          >
            {Object.keys(languages).map(key => (
              <option key={key} value={key}>
                {languages[key].name}
              </option>
            ))}
          </select>
        </nav>
      </div>
    );
  }
}

HeaderComponent.propTypes = {
  selectLanguage: PropTypes.func.isRequired,
  languages: PropTypes.object.isRequired // eslint-disable-line
};

const mapStateToProps = state => ({
  languages: state.languages
});

const mapDispatchToProps = dispatch => ({
  selectLanguage: lang => dispatch({ type: 'SWITCH_LANGUAGE', lang })
});

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

export default Header;
