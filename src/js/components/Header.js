import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { languages } = this.props;
    return (
      <div className="header">
        <h1> Alphabets </h1>
        <nav>
          Select Language:
          <select
            ame="language"
            ref={input => (this.language = input)}
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

const mapStateToProps = state => ({
  languages: state.languages
});

const mapDispatchToProps = dispatch => ({
  selectLanguage: lang => dispatch({ type: "SWITCH_LANGUAGE", lang })
});

const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

export default Header;
