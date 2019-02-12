import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';

class BarnamalaComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      barnamala: this.props.languages[this.props.selectedLanguage].letters
    };
    this.makeSelection = this.makeSelection.bind(this);
  }
  componentDidMount() {
    window.addEventListener('resize', () => {
      clearTimeout(this._resizeTimer);
      this._resizeTimer = setTimeout(this.resizeBarnamala, 16);
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedLanguage !== this.props.selectedLanguage) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({
        barnamala: this.props.languages[this.props.selectedLanguage].letters
      });
    }
  }

  makeSelection(index) {
    this.setState({
      selectedIndex: index
    });
  }

  render() {
    const { selectedIndex } = this.state;
    const transform = `translateX(-${(this.state.selectedIndex - 1) * 15}vw`;
    return (
      <div className="wrapper">
        <Header />
        <div className="barnamalasWrapper">
          <div
            className="barnamala"
            style={{
              transform
            }}
          >
            {this.state.barnamala.map((letter, index) => (
              <button
                key={letter}
                onClick={() => this.makeSelection(index)}
                className={selectedIndex === index ? 'selected' : ''}
                data-index={index}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

BarnamalaComponent.propTypes = {
  languages: PropTypes.object.isRequired, // eslint-disable-line
  selectedLanguage: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  languages: state.languages,
  selectedLanguage: state.selectedLanguage
});

const Barnamala = connect(mapStateToProps)(BarnamalaComponent);

export default Barnamala;
