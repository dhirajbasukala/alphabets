/**
 * Created by dbasukala on 12/2/2016.
 */

import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';

class BarnamalaComponent extends React.Component {

  static getDerivedStateFromProps(nextProps, prevState){
    if(prevState.selectedLanguage !== nextProps.selectedLanguage){
      return {
        barnamala: nextProps.languages[nextProps.selectedLanguage].letters,
        selectedIndex:0
      };
    }
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      direction: '',
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
  makeSelection(selectedIndex) {
    if (selectedIndex === this.state.selectedIndex) return;
    const direction =
      selectedIndex > this.state.selectedIndex ? 'left' : 'right';
    console.log(direction);
    this.setState({
      selectedIndex,
      direction
    });
  }

  render() {
    //return <div> hwllo </div>
    const { barnamala, selectedIndex } = this.state;
    let left = selectedIndex - 1;
    let center = selectedIndex;
    let right = selectedIndex + 1;
    if (selectedIndex === 0) {
      left = 0;
      center = 1;
      right = 2;
    }
    if (selectedIndex === barnamala.length) {
      left = selectedIndex - 2;
      center = selectedIndex - 1;
      right = selectedIndex;
    }
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


const mapStateToProps = (state) => ({
  languages: state.languages,
  selectedLanguage: state.selectedLanguage
})

const Barnamala = connect(mapStateToProps)(BarnamalaComponent)

export default Barnamala;
