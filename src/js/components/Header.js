import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    let selectedLanguage = null;
    const languageList = Object.keys(props.languages);
    if (languageList.length) {
      const firstLanguage = languageList[0];
      selectedLanguage = {
        value: props.languages[firstLanguage].short,
        label: props.languages[firstLanguage].name
      };
    }
    this.state = {
      selectedLanguage
    };
    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }
  handleLanguageChange(selectedLanguage) {
    this.setState({ selectedLanguage });
    this.props.selectLanguage(selectedLanguage.value);
  }
  render() {
    const { languages } = this.props;
    const { selectedLanguage } = this.state;
    const languageOptions = Object.keys(languages).map(key => ({
      value: languages[key].short,
      label: languages[key].name
    }));
    return (
      <div className="header">
        <h1> Alphabets </h1>
        <nav>
          <Select
            defaultValue={selectedLanguage || null}
            value={selectedLanguage}
            onChange={this.handleLanguageChange}
            options={languageOptions}
            placeholder="Select language"
            width={200}
          />
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
  languages: state.languages,
  selectedLanguage: state.selectedLanguage
});

const mapDispatchToProps = dispatch => ({
  selectLanguage: lang => dispatch({ type: 'SWITCH_LANGUAGE', lang })
});

const Header = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderComponent);

export default Header;
